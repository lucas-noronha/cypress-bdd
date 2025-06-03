#language: pt

Funcionalidade: Adicionar produto ao carrinho no Swag Labs
    Descrição da funcionalidade: Cenários de adição de produtos ao carrinho no Swag Labs

Contexto:
    Dado que eu acesso a página de login do Swag Labs
    E eu preencho o campo de login do Swag Labs com "standard_user"
    E eu preencho o campo de senha com "secret_sauce"
    E eu clico no botão de login
    E eu sou redirecionado para a página de produtos
    E eu vejo a lista de produtos disponíveis
    E eu vejo o produto "Sauce Labs Backpack" na lista de produtos
    E eu vejo o produto "Sauce Labs Bike Light" na lista de produtos
    E eu vejo o produto "Sauce Labs Bolt T-Shirt" na lista de produtos

Cenário: Adicionar produtos ao carrinho
    Quando eu clico no botão "Adicionar ao carrinho" do produto "Sauce Labs Backpack"
    E eu clico no botão "Adicionar ao carrinho" do produto "Sauce Labs Bike Light"
    Então eu devo ver o ícone do carrinho com o número 2
    E eu vou para a página do carrinho
    Então eu vejo o produto "Sauce Labs Backpack" no carrinho
    E eu vejo o produto "Sauce Labs Bike Light" no carrinho