// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-iframe';
import data from "../fixtures/data.json"
import login from '../pages/login/login';

//-- Login Commands --
Cypress.Commands.add('login', (email, password) => {
    login.getInputEmail(email)
    login.getInputPassword(password)
    login.getLogInBtn(data.anmelden).click()
    cy.wait(1500)
})

//-- This command verifies the Mein Konto, then mouseover it and is used to select one of the options from Mein Profile or Abmelden --
Cypress.Commands.add("meinKonto", (text) => {
    login.getMeinKontoBtn(data.meinKonto).realHover()
    .then(() => {
        cy.contains(text).click()
        cy.wait(1000)
    })
})