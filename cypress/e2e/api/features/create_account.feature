Feature: Criar conta de usuário via API

  Scenario: Criar uma nova conta de usuário com dados válidos
    Given que possuo os dados de um novo usuário válidos na fixture "requests/accountCreate.json"
    When envio uma requisição POST para a API de criação de conta
    Then o código de resposta deve ser 200
    And a resposta de sucesso deve conter o body "responses/accountCreateResponse.json"
    And salvo os dados do usuário em "commonData/userLogin.json" para uso futuro