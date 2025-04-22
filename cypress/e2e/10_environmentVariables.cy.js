
// Accessing Environment Variables : ->

const email = Cypress.env('login_email');
const password = Cypress.env('login_password');

cy.get('#email').type(email);
cy.get('#password').type(password);



// With Default Fallback : ->
const mode = Cypress.env('mode') || 'development'


// Use Case: Dynamic Login : ->
cy.visit('/login');
cy.get('#email').type(Cypress.env('login_email'));
cy.get('#password').type(Cypress.env('login_password'));
cy.get('form').submit();
