### Cypress Examples

Exemplos de testes de integração e E2E utilizando [Cypress](https://www.cypress.io/), contando com BDD e Reports personalizados.

## Tecnologias
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Mochawesome](https://github.com/adamgruber/mochawesome-report-generator)

### Funcionalidades da aplicação

* Rodar testes de Integração e E2E.
* Conexão com o Cypress Dashboard.
* Report customizado com Mochawesome.
* BDD com Cucumber.
* Report customizado com Cucumber.

## Instalações e usos

Clone ou faça o download desse repositório:

```
# Clone o repositório
$ git clone https://github.com/rodolforoc/cypress-examples
```

Dentro da pasta /cypress-examples rode os seguintes comandos:

```
# Rode todos os testes via CLI
$ node_modeules\.bin\cypress run

# running Cypress
```
<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/cypress-run.JPG" width="750">
</p>

```
# Rode para executar apenas um único teste via CLI
$ node_modeules\.bin\cypress run --spec .\cypress\integration\examples\test2.js

# running Cypress
```
<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/cypress-run-single.JPG" width="750">
</p>

```
# Rode para abrir o Cypress Test Runner
$ node_modeules\.bin\cypress open

# running Cypress
# Você pode escolher rodar qualquer teste e ver sua execução passo a passo
```
<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/cypress-open.gif" width="1024">
</p>

Para rodar o teste de BDD basta executar o arquivo com extensão .feature
```
# Rode para executar apenas um único teste via CLI
$ node_modeules\.bin\cypress run --spec .\cypress\

# running Cypress
```

## Reports personalizados

### Cypress Dashboard

<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/cypress-dashboard.JPG" width="1024">
</p>

### Mochawesome Report

<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/mochawesome-report.JPG" width="1024">
</p>

### Cucumber Report

<p align="center">
  <img src = "https://github.com/rodolforoc/cypress-examples/blob/main/assets/cucumber-report.JPG" width="1024">
</p>
