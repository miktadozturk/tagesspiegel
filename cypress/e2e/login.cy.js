import page from "../pages/login/page";
import login from "../pages/login/login";
import data from "../fixtures/data.json";
import user from "../fixtures/user.json"

const vorAndNachname = 'qa tagesspiegel'
describe('Tagesspiegel Login Test', () => {
    it('Login with valid credential, then verify the user logged in', () => {
        page.navigate()
        page.getAnmeldenBtn(data.anmelden).click()
        cy.login(user.email, user.password)
        cy.reload()
        cy.meinKonto(data.meinProfil)
        login.getVornameAndNachname(vorAndNachname)
        login.getEmailFromPersonlichenDaten(user.email)
        cy.meinKonto(data.abmelden)
    });
});