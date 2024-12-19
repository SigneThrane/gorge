
describe('homepage load', () => {
  it('visits the app root url', () => {
    cy.visit('http://localhost:5173/') 
    cy.contains('h1', 'You did it!')
  })
})
