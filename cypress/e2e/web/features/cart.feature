Feature: Carrinho de compras

    Background: Acessar pagina inicial
        Given o usuário acessa a página inicial do Automation Exercise

    Scenario: Incluir produto no carrinho e validar na tela de checkout com usuario logado
        And acesso o Submenu "Signup/Login"
        And o usuário preenche o formulário de login com credenciais válidas do arquivo "commonData/userLogin.json"
        And submete o login
        And ele deve ser autenticado com sucesso
        And acesso o Submenu "Products"
        And ele realiza a busca pelo produto "T-shirt"
        When ele adiciona o produto ao carrinho
        And acessa o carrinho
        And o produto pesquisado deve aparecer no carrinho
        When ele vai para a tela de chekout
        Then o checkout deve conter o produto buscado

