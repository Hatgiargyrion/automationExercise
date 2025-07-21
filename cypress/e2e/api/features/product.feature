Feature: Gerenciamento de produtos

  Scenario: Recuperar lista de produtos e salvar dados simplificados de produtos
    Given envio uma requisição GET para a API de lista de produtos
    Then o código de resposta deve ser 200
    And a resposta deve conter uma lista de produtos
    When extraio o nome e o preço de cada produto
    Then salvo a lista simplificada de produtos no arquivo "commomData/productList.json"
