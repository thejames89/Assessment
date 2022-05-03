import selectors from '../fixtures/selectors.js';

Cypress.Commands.add("visit_space_x", () => {
    cy.visit('https://fe-automation-tool.s3.eu-west-1.amazonaws.com/index.html')
    cy.get(selectors.allItems, {timeout: 10000})
})