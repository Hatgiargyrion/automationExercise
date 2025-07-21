class LoginPage {

    verifyLoginHeader() {
        elements.loginTitle().should('be.visible')
    }

    fillBasicSignupForm() {
        elements.nameSignupInput().type('Test User');
        elements.emailSignupInput().type(`testuser${Date.now()}@example.com`);
    }

    fillLoginForm(userData) {
        elements.emailLoginInput().clear().type(userData.email);
        elements.passwordLoginInput().clear().type(userData.password);
    }

    submitLogin() {
        elements.loginButton().click();

    }

    submitSignup() {
        elements.signupButton().click();
    }


}

const elements = {
    loginTitle: () => cy.get('div h2').contains('Login to your account'),
    nameSignupInput: () => cy.get('[data-qa="signup-name"]'),
    emailSignupInput: () => cy.get('[data-qa="signup-name"]'),
    emailLoginInput: () => cy.get('[data-qa="login-email"]'),
    passwordLoginInput: () => cy.get('[data-qa="login-password"]'),
    signupButton: () => cy.get('div.signup-form button'),
    loginButton: () => cy.get('div.login-form button')
}

export default LoginPage