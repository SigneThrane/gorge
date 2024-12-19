describe('Login and Redirect to TrendingPage', () => {
    it('should log in successfully and redirect to the TrendingPage', () => {
        cy.visit('http://localhost:5173/')
  
      cy.get('input[type="text"]').type('ss@example.com')  
      cy.get('input[type="password"]').type('123456')  
  
      cy.get('.login-button').click()
  
      cy.url().should('include', 'http://localhost:5173/TrendingPage')
  
    })
  })
  