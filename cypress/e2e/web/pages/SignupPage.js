class LoginPage {

    verifyLoginHeader() {
        elements.loginForm().should('be.visible')
    }

    fillSignupForm() {
        elements.titleRadioButton('Mrs').check();
        elements.passwordInput().type('Test@1234');
        elements.birthDaySelect().select('10');
        elements.birthMonthSelect().select('April');
        elements.birthYearSelect().select('1990');
        elements.newsletterCheckBox().check();
        elements.specialOffersCheckBox().check();
        elements.firstNameInput().type('Test');
        elements.lastNameInput().type('User');
        elements.companyInput().type('Test Company');
        elements.addressInput().type('123 Test Street');
        elements.countryInput().select('Canada');
        elements.stateInput().type('Ontario');
        elements.cityInput().type('Toronto');
        elements.zipCodeInput().type('M1A 2B3');
        elements.mobileNumberInput().type('1234567890');
      }

      submitSignup() {
        elements.createAccountButton().click();
    }

}

const elements = {
    signupTitle: () => cy.get('div h2').contains('Enter Account Information'),
    titleRadioButton: () => cy.get('[name="title"]'),
    nameInput: () => cy.get('#name'),
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    birthDaySelect: () => cy.get('#days'),
    birthMonthSelect: () => cy.get('#months'),
    birthYearSelect: () => cy.get('#years'),
    newsletterCheckBox: () => cy.get('#newsletter'),
    specialOffersCheckBox: () => cy.get('#optin'),
    firstNameInput: () => cy.get('#first_name'),
    lastNameInput: () => cy.get('#last_name'),
    companyInput: () => cy.get('#company'),
    addressInput: () => cy.get('#address1'),
    countryInput: () => cy.get('#country'),
    stateInput: () => cy.get('#state'),
    cityInput: () => cy.get('#city'),
    zipCodeInput: () => cy.get('#zipcode'),
    mobileNumberInput: () => cy.get('#mobile_number'),
    createAccountButton: () => cy.get('div.login-form button[type="submit"]'),
}

export default LoginPage