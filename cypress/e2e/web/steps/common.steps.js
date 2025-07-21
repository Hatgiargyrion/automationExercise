import { When } from '@badeball/cypress-cucumber-preprocessor';
import CommonPage from '../pages/CommonPage';

const commonPage = new CommonPage();

When('acesso o Submenu {string}', (submenu) => {
    commonPage.accessSubMenuWithTitle(submenu);
});

