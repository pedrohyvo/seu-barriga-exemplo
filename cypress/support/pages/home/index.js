const el = require('./elements').ELEMENTS;

class Home {

  checkAlertSuccess(message) {
    cy.get(el.div.alertSuccess)
    .should('be.visible')
    .and('contain', 'Bem vindo, ' + message + '!')
  }

  goToMovimentacaoPage() {
    cy.get(el.menu.movimentacao)
      .click()
  }

}

export default new Home();