class ProductsPage {

    verifyProductPage() {
        elements.productsTitle().should('be.visible')
    }

    searchProduct(product) {
        elements.searchField().type(product)
        elements.submitSearch().click()
    }

    assertListProduct() {
        cy.get("@product").then((product) => {
            elements.productSearchedLabel(product[0]).should('be.visible')
        });
    }
}

const elements = {
    productsTitle: () => cy.get('div h2').contains('All Products'),
    searchField: () => cy.get('#search_product'),
    productSearchedLabel: (product) => cy.get('div.productinfo.text-center p').contains(product),
    submitSearch: () => cy.get('#submit_search')
}

export default ProductsPage