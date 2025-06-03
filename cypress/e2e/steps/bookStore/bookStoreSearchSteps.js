/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso a página da loja de livros", () => {
    cy.visit('https://demoqa.com/books')
})

When("eu preencho o campo de pesquisa com {string}", (string) => {
    cy.get('#searchBox').type(string)
})
And("eu clico no botão de pesquisa", () => {
    cy.get('#basic-addon2').click()
})

Then("eu devo ver apenas um livro na lista de resultados com o título {string}", (string) => {
    //rt-tbody existe e tem a quantidade de filhos igual ao tamanho da pagina, mas todas as linhas não possuem texto, como verificar?
    cy.get(`.rt-tr-group:contains("${string}")`).should('have.length', 1)
})

Then("eu devo ver uma mensagem {string}", (string) => {
    cy.get('.rt-noData').should('contain', string)
})