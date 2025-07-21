Feature: Cadastro de usuário

  Background: Acessar tela de login
    Given o usuário acessa a página inicial do Automation Exercise
    When acesso o Submenu "Signup/Login"

  Scenario: Criação de conta com sucesso
    And preenche o pré-formulário com nome e e-mail
    And submete o pré cadastro
    And preenche o formulário de registro com dados pessoais e endereço válidos
    And submete o cadastro
    Then a conta deve ser criada com sucesso
