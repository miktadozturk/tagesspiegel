class Page {
    navigate() {
        return cy.visit('/')
    }

    getAnmeldenBtn(text) {
        return cy.get('a[class*="menu__profile"]').should('be.visible').and('contain', text)
    }
}
  
export default new Page()