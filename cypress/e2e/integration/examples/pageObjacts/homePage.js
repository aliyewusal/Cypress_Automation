class HomePage {
    getHamburger() {
        return cy.get('#nav-hamburger-menu')
    }

    getElectronicsFromHamburger() {
        return cy.get('a[data-menu-id="5"]')
            .contains('Electronics')
    }

    getTvAndVideoFromElectronics() {
        return cy.contains('Television & Video')
    }

    getSignIn() {
        return cy.get('a[data-nav-ref="nav_ya_signin"]')
    }

}

export default HomePage
