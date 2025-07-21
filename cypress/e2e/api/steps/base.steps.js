import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("o código de resposta deve ser {int}", (statusCode) => {
    cy.get("@response").then((response) => {
        expect(response.status).to.eq(statusCode);
    });
});

Then("a resposta de sucesso deve conter o body {string}", (fixtureFile) => {

    cy.get("@response").then((response) => {
        const responseBody = typeof response.body === "string" 
          ? JSON.parse(response.body) 
          : response.body;
        
        cy.fixture(fixtureFile).then((data) => {
          expect(responseBody).to.deep.equal(data);
        });
      });
});

