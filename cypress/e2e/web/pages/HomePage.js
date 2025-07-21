class HomePage {

    acessWebsite() {
        cy.visit('https://www.automationexercise.com/')
        elements.logo().should('be.visible')
    }

    clickSignupLoginButton() {
        elements.btnSignupLogin().click()
    }
}

const elements = {
    logo: () => cy.get('img[alt="Website for automation practice"]'),
    btnSignupLogin: () => cy.get('a[href="/login"]')
}

export default HomePage