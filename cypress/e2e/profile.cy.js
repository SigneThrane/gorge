describe('Edit Profile Button', () => {
    it('should redirect to the ProfileSetting page when the Edit profile button is clicked', () => {
      cy.visit('http://localhost:5173/MyProfile') 
      cy.get('#edit').should('exist')
      cy.get('#edit').click()
  
      cy.url().should('include', 'http://localhost:5173/ProfileSetting')
    })
  })
  