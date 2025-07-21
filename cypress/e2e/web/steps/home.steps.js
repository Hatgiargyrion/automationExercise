import { When, Given } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';

const homePage = new HomePage();

Given('the user accesses the Automation Exercise home page', () => {
    homePage.acessWebsite();
});

When('the user navigates to the Signup Login page', () => {
    homePage.clickSignupLoginButton();
});
