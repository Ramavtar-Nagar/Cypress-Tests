// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypress = require("cypress");



// Example 1: Custom Login Command: ->
Cypress.Commands.Add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
});

// Example 2: Fill Signup Form: ->
Cypress.Commands.Add('fillSignupForm', (username, email, password) => {
    cy.get('#name').type(username)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#signup-btn').click()
})

// Overwrite Cypress’s built-in commands (if needed): ->
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Add auth headers to every visit if needed
    originalFn(url, {
      ...options,
      headers: { Authorization: 'Bearer my-token' },
    })
  })