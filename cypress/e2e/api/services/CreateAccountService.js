class CreateAccountService {
    createAccount(payload) {
      return cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/createAccount",
        form: true,
        body: payload,
        failOnStatusCode: false 
      });
    }
  }
  
  export default new CreateAccountService();
  