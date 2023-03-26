class TVAndVideo {
    getDepartmentTV() {
        return cy.get('span.a-size-base.a-color-base')
            .contains('Televisions')
    }

    getBrandSamsung() {
        return cy.get('#brandsRefinements')
            .contains('SAMSUNG')
    }

    getSortBy() {
        return cy.get('span[aria-label="Sort by:"]')
    }

    getPriceHighToLow() {
        return cy.get('li.a-dropdown-item')
            .contains('Price: High to Low')
    }

    getFirstProductImage() {
        return cy.get('.s-image')
            .first()
    }

}

export default TVAndVideo
