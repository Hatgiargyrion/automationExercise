import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';

const homePage = new HomePage();

Given('o usuário acessa a página inicial do Automation Exercise', () => {
    homePage.acessWebsite();
});

Then('ele deve ser autenticado com sucesso', () => {
    homePage.verifyUserLogged();
});