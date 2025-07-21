Feature: Busca de produtos
    Background: Acessar pagina inicial
        Given o usuário acessa a página inicial do Automation Exercise

    Scenario: Realizar uma busca por produto com usuario logado
        And acesso o Submenu "Signup/Login"
        And o usuário preenche o formulário de login com credenciais válidas do arquivo "commonData/userLogin.json"
        And submete o login
        And ele deve ser autenticado com sucesso
        When acesso o Submenu "Products"
        And ele realiza a busca pelo produto "TShirt"
        Then a lista de produtos relacionados ao produto pesquisado deve ser exibida