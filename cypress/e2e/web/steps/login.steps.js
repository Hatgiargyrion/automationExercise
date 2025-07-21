import { Given } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('fill out the pre-form with your name and email', () => {
    loginPage.verifyLoginHeader();
    loginPage.fillBasicSignupForm();
});
