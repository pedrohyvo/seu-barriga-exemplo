const el = require('./elements').ELEMENTS;

class Movimentacao {

  fillUpMovimentacaoForm(tipo, dataTransacao, dataPagamento, descricao, interessado, valor, conta, situacao) {
    cy.get(el.select.tipo)
      .should('be.visible')
      .select(tipo, {force: true})
    cy.get(el.input.dataTransacao)
      .type(dataTransacao)
    cy.get(el.input.dataPagamento)
      .type(dataPagamento)
    cy.get(el.input.descricao)
      .type(descricao)
    cy.get(el.input.interessado)
      .type(interessado)
    cy.get(el.input.valor)
      .type(valor)
    cy.get(el.select.conta)
      .should('be.visible')
      .select(conta, {force: true})
    this.markSituacao(situacao)
    cy.get(el.button.salvar)
      .click()
  }

  checkMovimentacaoWasAddedSuccessfully(message) {
    cy.get(el.div.alertSuccess)
      .should('be.visible')
      .and('contain', message)
  }

  markSituacao(situacao) {
    if (situacao == 'Pago') {
      cy.get(el.radio.statusPago)
        .click()
    } else {
      cy.get(el.radio.statusPendente)
        .click()
    }
  }

}

export default new Movimentacao();