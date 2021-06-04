it('should pass', () => {
    cy.visit('https://www.unilever.com/')
    cy.get('nav.primary-nav').should('be.visible')
});