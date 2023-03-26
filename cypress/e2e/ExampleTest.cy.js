import HomePage from '../e2e/integration/examples/pageObjacts/homePage'
import TVAndVideo from '../e2e/integration/examples/pageObjacts/tvAndVidoePage'
import ProductPage from '../e2e/integration/examples/pageObjacts/productPage'

describe('Amazon Test', () => {
    before(() => {
        //Screenshot practically does nothing , added to display function on before hook
        cy.screenshot('my-screenshot');
    })
    it('Search for Samsung TV and assert product details', () => {
        const homePage = new HomePage();
        const tvAndVideoPage = new TVAndVideo();
        const productPage = new ProductPage

        //Waits applied to bypass Amazon web scraping detection
        cy.visit('https://www.amazon.com/');
        cy.wait(2000);
        homePage.getHamburger().click();
        cy.wait(2000)
        homePage.getElectronicsFromHamburger().click();
        cy.wait(2000)
        homePage.getTvAndVideoFromElectronics().click();
        cy.wait(2000)
        tvAndVideoPage.getDepartmentTV().click();
        cy.wait(2000)
        tvAndVideoPage.getBrandSamsung().click();
        cy.wait(2000);
        tvAndVideoPage.getSortBy().click();
        cy.wait(2000);
        tvAndVideoPage.getPriceHighToLow().click();
        cy.wait(2000);
        tvAndVideoPage.getFirstProductImage().click();
        cy.wait(2000);
        productPage.getProductImage().should('be.visible');
        cy.getProductTitle();
        cy.wait(2000)
        cy.getProductDescription();
    });
});