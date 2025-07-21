import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccountService from "../services/CreateAccountService.js";

let userData;


Given("que possuo os dados de um novo usuário válidos na fixture {string}", (fixtureFile) => {
  cy.fixture(fixtureFile).then((data) => {
    const timestamp = Date.now();
    data.email = `testuser${timestamp}@example.com`;
    userData = data;
  });
});

When("envio uma requisição POST para a API de criação de conta", () => {
    CreateAccountService.createAccount(userData).as("response");
});

When("salvo os dados do usuário em {string} para uso futuro", (loginFixtureFile) => {
  const loginData = {
    email: userData.email,
    password: userData.password
  };
  cy.writeFile(`cypress/fixtures/${loginFixtureFile}`, loginData);
});
