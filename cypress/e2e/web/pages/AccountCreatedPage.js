class AccountCreatedPage {

    verifySignupHeader() {
        elements.accountCreatedText().should('be.visible')
    }
}

const elements = {
    accountCreatedText: () => cy.get('div h2').contains('Account Created!')
}

export default AccountCreatedPage