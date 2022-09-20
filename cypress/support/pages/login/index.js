const el = require('./elements').ELEMENTS;

class Login {

  fillUpLoginForm(email, password) {
    cy.get(el.input.email)
      .type(email)
    cy.get(el.input.password)
      .type(password, { log: false })
    cy.get(el.button.entrar)
      .click();
  }

}

export default new Login();