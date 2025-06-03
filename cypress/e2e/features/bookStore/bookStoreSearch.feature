#language: pt

Funcionalidade: Pesquisa na loja de livros
    Descrição da funcionalidade: Cenários de pesquisa na loja de livros - Válido e Inválido

Contexto:
    Dado que eu acesso a página da loja de livros

Cenário: Pesquisa válida
    Quando eu preencho o campo de pesquisa com "Git Pocket Guide"
    E eu clico no botão de pesquisa
    Então eu devo ver apenas um livro na lista de resultados com o título "Git Pocket Guide"
Cenário: Pesquisa inválida
    Quando eu preencho o campo de pesquisa com "Livro Inexistente"
    E eu clico no botão de pesquisa
    Então eu devo ver uma mensagem "No rows found"