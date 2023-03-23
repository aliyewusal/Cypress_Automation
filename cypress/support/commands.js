Cypress.Commands.add('getProductTitle', () => {
    cy.get('#productTitle')
        .invoke('text')
        .then((productName) => {
            console.log(`Product name: ${productName}`)
        });
});

Cypress.Commands.add('getProductDescription', () => {
    cy.get('#feature-bullets')
        .invoke('text')
        .then((productDesc) => {
            console.log(`Product description: ${productDesc}`)
        });
});

Cypress.Commands.add('enterEmail', (email) => {
    cy.get('#ap_email')
        .type(email);
});