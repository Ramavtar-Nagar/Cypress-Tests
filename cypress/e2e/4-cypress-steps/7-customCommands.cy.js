// Example 1: Custom Login Command Usage: ->
describe('login test', () => {
    it('logs in successfully', () => {
        cy.login('avatar@example.com', 'password123');
        cy.url().should('include', '/dashboard');
    })
})

// Example 2: Fill Signup Form
describe('sign up test', () => {
    it('sign up in successfully', () => {
        cy.fillSignupForm('Avatar', 'avatar@example.com', 'password369')
    })
})