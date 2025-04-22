// Hooks

const { afterEach } = require("mocha")

describe('User Dashboard', () => {

    before(() => {
        // Runs Once
        cypress.login('admin@test.com', 'password123')
    })

    brforeEach(() => {
        // Runs before each test
        cy.visit('/dashboard')
    })

    afterEach(() => {
        // Runs after each test
        cy.clearLocalStorege()
    })

    after(() => {
        // Runs once at the end
        cy.logout()
    })

    it('should display welcome message', () => {
        // Test Code... :)
    })
});