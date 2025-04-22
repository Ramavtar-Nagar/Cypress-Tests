// Today, we'll take a narrow view of these steps and map them cleanly to Cypress commands:

// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

describe('Visit A Page', () => {
    it('Visits The Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    });
});