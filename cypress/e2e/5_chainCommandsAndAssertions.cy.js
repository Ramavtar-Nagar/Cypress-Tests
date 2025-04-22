const { expect } = require("chai");

// Adding more commands and assertions
describe('Adding more commands and assertions', () => {
    it('Gets, Types and Asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it
        cy.get('.action-email').type('fake@email.com')

        //  Verify that the value has been updated
        cy.get('.action-email').should('have.value', 'fake@email.com')

    });
});

// ✅ Method 1: .should(...) ->

cy.get('button').should('be.visible');
cy.get('.error-msg').should('contain', 'Invalid Login');
cy.get('input').should('have.value', 'Avatar')

// ✅ Method 2: .then() + expect(...) (for more control)

cy.get('.score').then(( $el ) => {
    expect( $el.text()).to.equal('100')
})

// Chain multiple assertions:

cy.get('button')
    .should('be.visible')
    .and('contain', 'submit')
    .and('not.be.disabled')

// ⚙️ 5. Real Example: Login Form

    cy.get('[data-cy="username-input"]').type('avatar')
    cy.get('[data-cy="password-input"]').type('789456333')
    cy.get('[data-cy"submit-btn"]').click()
    // After submit, check welcome message
    cy.get('[data-cy="elcomw-msg"]').should('contain', 'welcome, Avatar')