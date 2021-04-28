import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../support/pageObjects/HomePage';
import ProductPage from '../../../../support/pageObjects/ProductPage';

const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I open Ecommerce Page', function() {
  cy.visit(Cypress.env('url')+"/angularpractice/")
})

When('I add items to Cart',function () {
  homePage.getShopTab().click()
  
  this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
  });

  productPage.checkOutButton().click()
})

And('Validate the total prices', function() {
  var sum=0
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

    const amount=$el.text()
    var res= amount.split(" ")
    res= res[1].trim()
    sum= Number(sum)+Number(res)}).then(function()  {
        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element) {
      const amount=element.text()
      var res= amount.split(" ")
      var total= res[1].trim()
      expect(Number(total)).to.equal(sum)
    }) 
})

Then('Select the country submit and verify Thank you', function() {
  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({force: true})
  cy.get('input[type="submit"]').click()
  cy.get('.alert').then(function(element) {
    const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
  })
})

When('I fill the form details',function(dataTable) {
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(dataTable.rawTable[1][0])
  homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behaviour',function() {
  homePage.getTwoWayDataBinding().should('have.value',name)
  homePage.getEditBox().should('have.attr','minlength','2')
  homePage.getEntrepreneaur().should('be.disabled')
  Cypress.config('defaultCommandTimeout', 8000)
})

And('select the Shop Page',function() {
  homePage.getShopTab().click()
})

