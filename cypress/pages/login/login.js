class Login {
    getInputEmail(typeEmail) {
        return  cy.iframe().find('input[id*="formLogin_email"]').should('be.visible').type(typeEmail, { log:false })
    }
    getInputPassword(typePassword) {
        return cy.iframe().find('input[id*="formLogin_password"]').should('be.visible').type(typePassword, { log:false })
    }
    getLogInBtn(loginBtn) {
        return cy.iframe().find("button[type='submit']").contains(loginBtn).should('be.visible')
    }

    getMeinKontoBtn(textKonto) {
        return cy.get('span.profile-text').should('be.visible').and('have.text', textKonto)
    }

    getVornameAndNachname(userVorAndNachname) {
        return cy.get('.heading-title').should('be.visible').and('have.text', userVorAndNachname)
    }

    getEmailFromPersonlichenDaten(getEmail) {
        return cy.get('.userdata :nth-child(3) > span.value ').should('be.visible').and('have.text', getEmail)
    }
}

export default new Login();