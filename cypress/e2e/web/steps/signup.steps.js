import { Given } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../pages/SignupPage';

const signupPage = new SignupPage();

Given('fills in the registration form with valid personal and address details', () => {
  signupPage.fillSignupForm();
});

Given('submits the registration', () => {
  signupPage.submitSignup();
});
