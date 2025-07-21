import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsPage from '../pages/ProductsPage';

const productsPage = new ProductsPage();

When('ele realiza a busca pelo produto {string}', (product) => {
    productsPage.verifyProductPage();
    cy.wrap(product).as("product");
    productsPage.searchProduct(product)
});

Then('a lista de produtos relacionados ao produto pesquisado deve ser exibida', () => {
    productsPage.assertListProduct();
});
