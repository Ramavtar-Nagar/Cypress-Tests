// cy.get('[data-cy="username-input"]')

// Aliasing DOM elements: ->
cy.get['input[name="email"]'].as('emailInput');
cy.get('@emailInput').type('avatar@example.com');


// Aliasing fixture data: ->
describe('using aliasing fixture data', () => {

    cy.fixture('user').as('userData');

    it('uses alis for fixture', function() {
        cy.get('@userData').then( (data) => {
            cy.get('#email').type(data.email);
        });
    });
});


// Aliasing intercepted API calls: -> 
cy.intercept('GET', '/api/user').as('getUser');
cy.wait('@getUser');

// .then() – Handling Async Data: ->
cy.get('h1').then( ($h1) => {
    const text = $h1.text();
    expect(text).to.equal('Welcome')
});

describe('aliases plus dot then', () => {

    beforeEach( () => {
        cy.fixture('user').as('user')
    })

    it('logs in using aliased data', function() {
        cy.get('@user').then( (user) => {
            cy.get('#email').type(user.email);
            cy.get('#password').type(user.password);
            cy.get('form').submit();
        })
    })
})