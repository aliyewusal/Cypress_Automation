import HomePage from '../e2e/integration/examples/pageObjacts/homePage'
import SignIn from '../e2e/integration/examples/pageObjacts/signInPage'

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

        const homePage = new HomePage();
        const signIn = new SignIn();

        cy.visit('https://www.amazon.com/');
        cy.wait(2000);
        homePage.getSignIn().click();
        cy.wait(2000);
        cy.enterEmail(this.data.email);
        cy.wait(2000);
        signIn.getContinue().click();
        cy.wait(2000);
        signIn.getAlertText()
            .should('contain.text','We cannot find an account with that email address')
    });
});
