// stub common missing image and font requests
Cypress.Commands.add('stubMissingAssets', () => {
  // small empty SVG placeholder
  const svgPlaceholder = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';

  // images under /__/images/*
  cy.intercept('GET', '/__/images/*', {
    statusCode: 200,
    headers: { 'content-type': 'image/svg+xml' },
    body: svgPlaceholder
  });

  // fonts or other cross-host files you saw (adjust pattern if needed)
  cy.intercept('GET', '/s/inter/*', { statusCode: 200, body: '' });
  cy.intercept('GET', '/__/*', { statusCode: 200, body: '' }); // broader, use carefully
});

import './commands'
import "cypress-mochawesome-reporter/register";
import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';