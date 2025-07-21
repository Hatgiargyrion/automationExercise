class LoginPage {

    verifyLoginHeader() {
        elements.loginTitle().should('be.visible')
    }

    fillBasicSignupForm() {
        elements.nameInput().type('Test User');
        elements.emailInput().type(`testuser${Date.now()}@example.com`);
        elements.signupButton().click();
      }

}

const elements = {
    loginTitle: () => cy.get('div h2').contains('Login to your account'),
    nameInput: () => cy.get('[name="name"]'),
    emailInput: () => cy.get('.signup-form [name="email"]'),
    signupButton: () => cy.get('div.signup-form button')

}

export default LoginPage