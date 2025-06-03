#language: pt

Funcionalidade: Login no Swag Labs
    Descrição da funcionalidade: Cenários de login no Swag Labs - Válido e Inválido

Contexto:
    Dado que eu acesso a página de login do Swag Labs

Cenário: Login com usuario Válido
    Quando eu preencho o campo de login com "standard_user"
    E eu preencho o campo de senha com "secret_sauce"
    E eu clico no botão de login do Swag Labs
    Então eu devo ser redirecionado para a página de produtos

Cenário: Login com usuario Inválido
    Quando eu preencho o campo de login com "locked_out_user"
    E eu preencho o campo de senha com "secret_sauce"
    E eu clico no botão de login do Swag Labs
    Então eu devo ver uma mensagem de erro como "Epic sadface: Sorry, this user has been locked out."