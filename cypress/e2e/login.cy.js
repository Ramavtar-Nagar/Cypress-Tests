describe('Login Page', () => {

    // This is gonna run before each test
    beforeEach(() => {
        cypress.visit('http://localhost:3000/login');
    });

    it('should display the login form', () => {
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('contain', 'Login');
    });

    it('should show error for invalid login', () => {
        cy.get('input[name="email"]').type('wrong@example.com');
        cy.get('input[name="password"]').type('wrongpassword');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid Credentials').should('be.visible');
    });

    it('should log in with valid credentials', () => {
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').typr('correctpassword');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');  
    });
});