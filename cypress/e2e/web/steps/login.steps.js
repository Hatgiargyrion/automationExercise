import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('preenche o pré-formulário com nome e e-mail', () => {
    loginPage.verifyLoginHeader();
    loginPage.fillBasicSignupForm();
});

Given('o usuário preenche o formulário de login com credenciais válidas do arquivo {string}', (fixturePath) => {
    cy.fixture(fixturePath).then((userData) => {
        cy.wrap(userData).as('userData')
        loginPage.fillLoginForm(userData);
    });
});

When('submete o login', () => {
    loginPage.submitLogin();
});

When('submete o cadastro', () => {
    loginPage.submitSignup();
});