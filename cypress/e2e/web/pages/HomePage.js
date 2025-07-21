class HomePage {

    acessWebsite() {
        cy.visit('https://www.automationexercise.com/')
        elements.logo().should('be.visible')
    }

    clickSignupLoginButton() {
        elements.btnSignupLogin().click()
    }

    verifyUserLogged() {
        elements.userLoggedLabel().should('be.visible');

        cy.get('@userData').then((userData) => {
            elements.nameUserLoggedLabel(userData.name);
        })
    }
}

const elements = {
    logo: () => cy.get('img[alt="Website for automation practice"]'),
    btnSignupLogin: () => cy.get('a[href="/login"]'),
    userLoggedLabel: () => cy.get('a').contains(' Logged in as '),
    nameUserLoggedLabel: (userData) => cy.get('b').contains(userData)
}

export default HomePage