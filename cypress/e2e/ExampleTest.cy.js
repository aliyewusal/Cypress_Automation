describe('Amazon Test', () => {
    before(() => {
        cy.screenshot('my-screenshot');
    })
    it('Search for Samsung TV and assert product details', () => {
        //Waits applied to bypass Amazon web scraping detection
        cy.visit('https://www.amazon.com/');
        cy.wait(2000);
        cy.get('#nav-hamburger-menu')
            .click();
        cy.wait(2000)
        cy.get('a[data-menu-id="5"]')
            .contains('Electronics')
            .click();
        cy.wait(2000)
        cy.contains('Television & Video')
            .click();
        cy.wait(2000)
        cy.get('span.a-size-base.a-color-base')
            .contains('Televisions')
            .click();
        cy.wait(2000)
        cy.get('#brandsRefinements')
            .contains('SAMSUNG')
            .click();
        cy.wait(2000);
        cy.get('span[aria-label="Sort by:"]')
            .click();
        cy.wait(2000);
        cy.get('li.a-dropdown-item')
            .contains('Price: High to Low')
            .click();
        cy.wait(2000);
        cy.get('.s-image')
            .first()
            .click();
        cy.wait(2000);
        cy.get('#landingImage')
            .should('be.visible');
        cy.getProductTitle();
        cy.wait(2000)
        cy.getProductDescription();
    });
});