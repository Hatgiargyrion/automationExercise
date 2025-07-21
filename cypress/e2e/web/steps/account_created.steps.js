import { Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountCreatedPage from '../pages/AccountCreatedPage';

const accountCreatedPage = new AccountCreatedPage();

Then('the account should be created successfully', () => {
    accountCreatedPage.verifySignupHeader();
});
