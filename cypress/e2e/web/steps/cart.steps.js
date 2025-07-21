import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../pages/CartPage';

const cartPage = new CartPage();

When('o produto pesquisado deve aparecer no carrinho', () => {
    cartPage.verifyProductInCart();
});

When('ele vai para a tela de chekout', () => {
    cartPage.accessCheckout();
});

Then('o checkout deve conter o produto buscado', () => {
    cartPage.verifyProductInCheckoutgit();
});

