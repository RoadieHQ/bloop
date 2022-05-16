describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to k jasxa').click();
  })
})
