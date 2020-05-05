describe(' UI E2E testing For News', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('UserName is Wrong', () => {
        cy.get('input[name=uName]').type('ad');
        cy.get('input[name=uPass]').type('password');
        cy.get('#login').click();
        cy.get('p').should('be.visible');
        cy.url().should('include', "3000/")
    })

    it('Redirect to dashboard page', () => {
        cy.get('input[name=uName]').type('admin');
        cy.get('input[name=uPass]').type('password');
        cy.get('#login').click();
        cy.url().should('include', "3000/");
    })


    it("Check Register ", () => {

        cy.get('.register').click();
        cy.url().should('include', '/register');
    })


    it("check read later news fetch", () => {
        cy.get('input[name = uName]').type('admin');
        cy.get('input[name = uPass]').type('password');
        cy.url().should('include', ':3000/Dashboard');

        cy.get('#readnow').click();
    })


})