class ProductsPage {

    verifyProductPage() {
        elements.productsTitle().should('be.visible');
    }

    searchProduct(product) {
        elements.searchField().type(product);
        elements.submitSearch().click();
    }

    assertListProduct() {
        cy.get("@product").then((product) => {
            elements.productSearchedLabel(product[0]).should('be.visible');
        });
    }

    addProductToCart() {
        elements.addToCartButton().first().click();

    }

    accessCartWithModal() {
        elements.viewCartButton().click();
    }
}

const elements = {
    productsTitle: () => cy.get('div h2').contains('All Products'),
    searchField: () => cy.get('#search_product'),
    productSearchedLabel: (product) => cy.get('div.productinfo.text-center p').contains(product),
    productImage: () => cy.get('.product-image-wrapper').first(),
    submitSearch: () => cy.get('#submit_search'),
    viewCartButton: () => cy.get('#cartModal a[href="/view_cart"]'),
    addToCartButton: () => cy.get('div.productinfo.text-center a.add-to-cart'),
}

export default ProductsPage