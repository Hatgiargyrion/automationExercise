import { Given } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('preenche o pré-formulário com nome e e-mail', () => {
    loginPage.verifyLoginHeader();
    loginPage.fillBasicSignupForm();
});
