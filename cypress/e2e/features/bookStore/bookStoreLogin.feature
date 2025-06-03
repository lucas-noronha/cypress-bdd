#language: pt

Funcionalidade: Login na loja de livros
    Descrição da funcionalidade: Cenários de login na loja de livros - Válido e Inválido

Contexto:
    Dado que eu acesso a página de login da loja de livros

Cenário: Login válido
    Quando eu preencho o campo de usuário com "lucasnoronha"
    E eu preencho o campo de senha com "Test@123"
    E eu clico no botão de login da Loja de Livros
    Então eu devo ser redirecionado para a página de perfil
    E meu nome de usuário "lucasnoronha" deve ser exibido na página

Cenário: Login inválido
    Quando eu preencho o campo de usuário com "usuario_invalido"
    E eu preencho o campo de senha com "senha_invalida"
    E eu clico no botão de login da Loja de Livros
    Então eu devo ver uma mensagem de erro "Invalid username or password!"
    E eu não devo ser redirecionado para a página de perfil