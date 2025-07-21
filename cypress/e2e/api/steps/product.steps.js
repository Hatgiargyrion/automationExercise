import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductService from '../services/ProductService';

Given('envio uma requisição GET para a API de lista de produtos', () => {
  ProductService.getProductList().then((response) => {
    cy.wrap(response).as("response");
  });
});

Then('a resposta deve conter uma lista de produtos', () => {
  cy.get('@response').should((response) => {
    expect(response.body).to.have.property('products');
    expect(response.body.products).to.be.an('array');
    expect(response.body.products.length).to.be.greaterThan(0);
  });
});

When('extraio o nome e o preço de cada produto', () => {
  cy.get('@response').then((response) => {
    const extractedProducts = response.body.products.map((product, ) => ({
      id: product.id,
      nome: product.name,
      preço: Number(product.price.replace(/^Rs\.\s*/, ''))
    }));

    cy.wrap(extractedProducts).as('extractedProducts');
  });
});

Then('salvo a lista simplificada de produtos no arquivo {string}', (filename) => {
  cy.get('@extractedProducts').then((extractedProducts) => {
    cy.writeFile(`cypress/fixtures/${filename}`, {
      products: extractedProducts
    });
  });
});
