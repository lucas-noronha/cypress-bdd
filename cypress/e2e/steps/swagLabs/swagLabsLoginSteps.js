/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso a página de login do Swag Labs", () => {
    cy.visit('https://www.saucedemo.com')
})

When("eu preencho o campo de login com {string}", (string) => {
    cy.get('#user-name').type(string)
})

And("eu preencho o campo de senha com {string}", (string) => {
    cy.get('#password').type(string)
})

And("eu clico no botão de login do Swag Labs", () => {
    cy.get('#login-button').click()
})

Then("eu devo ser redirecionado para a página de produtos", () => {
    cy.url().should('include', '/inventory.html')
})

Then("eu devo ver uma mensagem de erro como {string}", (string) => {
    cy.get('.error-message-container').should('contain', string)
})

Then("eu não devo ser redirecionado para a página de produtos", () => {
    cy.url().should('not.include', '/inventory.html')
})