import { Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountCreatedPage from '../pages/AccountCreatedPage';

const accountCreatedPage = new AccountCreatedPage();

Then('a conta deve ser criada com sucesso', () => {
    accountCreatedPage.verifySignupHeader();
});
