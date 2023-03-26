class SignIn {
    getContinue() {
        return cy.get('#continue')
    }

    getAlertText() {
        return cy.get('span.a-list-item')
    }
}

export default SignIn
