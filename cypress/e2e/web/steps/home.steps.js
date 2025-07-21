import { When, Given } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';

const homePage = new HomePage();

Given('o usuário acessa a página inicial do Automation Exercise', () => {
    homePage.acessWebsite();
});

When('o usuário navega para a página de Cadastro Login', () => {
    homePage.clickSignupLoginButton();
});

Then('ele deve ser autenticado com sucesso', () => {
    homePage.verifyUserLogged();
});