/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso a página de login da loja de livros", () => {
    cy.visit('https://demoqa.com/login')
})

When("eu preencho o campo de usuário com {string}", (string) => {
        cy.get('#userName').type(string)
        
})

And("eu preencho o campo de senha com {string}", (string) => {
        cy.get('#password').type(string)
})
And("eu clico no botão de login da Loja de Livros", () => {
    cy.get('#login').click()
})

//Caminho feliz, onde login é bem sucedido
Then("eu devo ser redirecionado para a página de perfil", () => {
    cy.url().should('include', '/profile')
})
Then("meu nome de usuário {string} deve ser exibido na página", (string) => {
    cy.get('#userName-value').should('contain', string)
})

//Caminho também feliz, mas o login foi errado
Then("eu devo ver uma mensagem de erro {string}", (string) => {
    cy.get('#name').should('contain', string)
})

Then("eu não devo ser redirecionado para a página de perfil", () => {
    cy.url().should('not.include', '/profile')
})
