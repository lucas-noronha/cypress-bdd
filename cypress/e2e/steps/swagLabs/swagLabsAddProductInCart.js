/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso a página de login da loja de produtos", () => {
    cy.visit('https://www.saucedemo.com')
})
And("eu preencho o campo de login do Swag Labs com {string}", (string) => {
    cy.get('#user-name').type(string)
})
And("eu preencho o campo de senha com {string}", (string) => {
    cy.get('#password').type(string)
}) 
And("eu clico no botão de login", () => {
    cy.get('#login-button').click()
})

And("eu sou redirecionado para a página de produtos", () => {
    cy.url().should('include', '/inventory.html')
})
And("eu vejo a lista de produtos disponíveis", () => {
    cy.get('.inventory_list').should('exist')
})
And("eu vejo o produto {string} na lista de produtos", (productName) => {
    cy.get('.inventory_item_name').contains(productName).should('exist')
})
When("eu clico no botão {string} do produto {string}}", (button, productName) => {
    cy.get('.inventory_item_name').contains(productName)
        .parents('.inventory_item')
        .find('.btn_inventory')
        .click()
})
And("eu clico no botão {string} do produto {string}", (button, productName) => {
    cy.get('.inventory_item_name').contains(productName)
        .parents('.inventory_item')
        .find(`.btn_inventory`)
        .click()
})

Then("eu devo ver o ícone do carrinho com o número 2", () => {
    cy.get('.shopping_cart_badge').should('contain', '2')
})
And("eu vou para a página do carrinho", () => {
    cy.get('.shopping_cart_link').click()
})

Then("eu vejo o produto {string} no carrinho", (productName) => {
    cy.get('.cart_item').contains(productName).should('exist')
})
And("eu vejo o produto {string} no carrinho", (string) => {
    cy.get('.cart_item').contains(string).should('exist')
})