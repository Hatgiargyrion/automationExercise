import { Given } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../pages/SignupPage';

const signupPage = new SignupPage();

Given('preenche o formulário de registro com dados pessoais e endereço válidos', () => {
  signupPage.fillSignupForm();
});

Given('submete o cadastro', () => {
  signupPage.submitSignup();
});
