describe("Query for an Element", ()=> {
    it('finds the content "type', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    });
});