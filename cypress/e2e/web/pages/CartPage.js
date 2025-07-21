class CartPage {

    verifyProductInCart() {
        cy.get("@product").then((product) => {
            elements.productTitle(product[0]).should('be.visible');
        });
    }

    verifyProductInCheckout() {
        cy.get("@product").then((product) => {
            elements.productTitle(product[0]).should('be.visible');
        });
    }

    accessCheckout() {
    elements.checkoutButton().click();
    }

}

const elements = {
    productTitle: (product) => cy.get('h4').contains(product),
    submenuProducts: () => cy.get('a[href="/products"]'),
    checkoutButton: () => cy.get('a.btn').contains('Proceed To Checkout'),
}

export default CartPage