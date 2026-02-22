require('cypress-xpath');
Cypress.Commands.add('login', (username, password) => {

  Cypress.on('uncaught:exception', () => false);
  cy.visit('', { timeout: 120000 });


  cy.get('input[name="Log.Username"]', { timeout: 20000 }).should('be.visible').clear().type(username);
  cy.get('input[name="Log.Password"]', { timeout: 20000 }).should('be.visible').clear().type(password);
  cy.get('button[type="submit"]', { timeout: 20000 }).should('be.visible').click();



   cy.viewport(1366, 768);
   cy.get('img[src="/assets/Images/ERPApp.svg"]', { timeout: 120000 }).should('be.visible').click();


  // search for I Card and navigate to it via stubbed window.open to preserve same window
  cy.get('input[ng-model="SearchERPLink"]', { timeout: 15000 }).should('be.visible').type('I Card');
     cy.window().then((win) => {
     cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url;
    });
  });

  cy.get("img[src='https://s3-noi.aces3.ai/franciscan/ProImage/ERPIcon/IDCard.svg']", { timeout: 20000 }).should('be.visible').click();

});
import '@4tw/cypress-drag-drop';
import "cypress-real-events/support";
import 'cypress-file-upload';



