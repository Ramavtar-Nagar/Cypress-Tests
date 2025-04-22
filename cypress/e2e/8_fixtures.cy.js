
// Using Fixtures : ->
describe('using fixtures', () => {
    it('logs in using fixtures data', () => {
        cy.fixture('user').then((userData) => {
            cy.visit('/login');

            cy.get('#email').type(userData.email);
            cy.get('#password').type(userData.password);
            cy.get('form').submit();

            cy.contains('Welcom, Avatar').should('be.visible');
        });
    });
});


// Using Fixtures with Aliases : ->
describe('using fixturees', () => {

    beforeEach(() => {
        cy.fixture('user').as('AvatarsData');
    });

    it('using fixturees with aliases', function() {
        cy.visit('/login');

        cy.get('#email').type('this.AvatarsData.email');
        cy.get('#passwrod').type('this.AvatarsData.password');
        cy.get('form').submit();

        cy.contains(`Welcome, ${this.user.name}`).should('be.visible');
    });
});