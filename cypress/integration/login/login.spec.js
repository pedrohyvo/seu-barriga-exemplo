/*
Scenario: Login with success
  Log in with the user
  Should be redirected to a home page
*/

import Login from '../../support/pages/login'
import Home from '../../support/pages/home'

describe('Login -', () => {
  it('should be able to login successfully', () => {
    cy.visit('/')
    Login.fillUpLoginForm(Cypress.env('email'), Cypress.env('senha'))
    Home.checkAlertSuccess(Cypress.env('nome'))
  });
});