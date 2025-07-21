class CommonPage {

    accessSubMenuWithTitle(submenu) {

        switch (submenu.toUpperCase()) {
            case 'HOME':
                elements.submenuHome().click();
                break;
            case 'PRODUCTS':
                elements.submenuProducts().click();
                break;
            case 'CART':
                elements.submenuCart().click();
                break;
            case 'SIGNUP/LOGIN':
                elements.submenuSignupLogin().click();
                break;
            default:
                throw new Error(`Submenu "${submenu}" não reconhecido`);
        }
    }

}

const elements = {
    submenuHome: () => cy.get('a[href="/"] i.fa.fa-home'),
    submenuProducts: () => cy.get('a[href="/products"]'),
    submenuCart: () => cy.get('a[href="/view cart"]'),
    submenuSignupLogin: () => cy.get('a[href="/login"]')
}

export default CommonPage