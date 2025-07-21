Feature: Login de usuário

    Background: Acessar tela de login
        Given o usuário acessa a página inicial do Automation Exercise
        And acesso o Submenu "Signup/Login"

    Scenario: Login com credenciais válidas
        And o usuário preenche o formulário de login com credenciais válidas do arquivo "commonData/userLogin.json"
        When submete o login
        Then ele deve ser autenticado com sucesso
