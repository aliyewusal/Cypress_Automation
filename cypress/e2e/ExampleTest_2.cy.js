describe('Amazon Test - Sign in with wrong email', function() {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
    });

    it('Verify the alert text when wrong email is provided', function() {
        //Waits applied to bypass Amazon web scraping detection
        // Wait for this.data to be defined before using it
        cy.wrap(this.data).should('not.be.undefined');

        cy.visit('https://www.amazon.com/');
        cy.wait(2000);
        cy.get('a[data-nav-ref="nav_ya_signin"]')
            .click();
        cy.wait(2000);
        cy.enterEmail(this.data.email);
        cy.wait(2000);
        cy.get('#continue')
            .click();
        cy.wait(2000);
        cy.get('span.a-list-item')
            .should('contain.text','We cannot find an account with that email address')
    });
});
