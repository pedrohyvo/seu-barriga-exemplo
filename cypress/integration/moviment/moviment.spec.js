/*
Scenario:  Create a movement
  Given I am logged in
  When I go into `Create Movement` 
  I fill in all required fields and create the movement
  It should be displayed a success message
*/

import Home from '../../support/pages/home'
import Login from '../../support/pages/login'
import Movimentacao from '../../support/pages/movimentacao'

const movimentacao = {
  tipo: 'Despesa',
  dataMovimentacao: '19/09/2022',
  dataPagamento: '20/09/2022',
  descricao: 'testing bla bla bla bla bla',
  interessado: 'Carlinhos de Jesus',
  valor: '100',
  conta: 'Principal',
  status: 'Pago'
}

describe('Moviment -', () => {
  
  beforeEach(() => {
    cy.visit('/')
    Login.fillUpLoginForm(
      Cypress.env('email'), 
      Cypress.env('senha')
    )
    Home.goToMovimentacaoPage()  
  });

  it('should be able to create a movement', () => {
    Movimentacao.fillUpMovimentacaoForm(
      movimentacao.tipo, 
      movimentacao.dataMovimentacao, 
      movimentacao.dataPagamento, 
      movimentacao.descricao, 
      movimentacao.interessado, 
      movimentacao.valor, 
      movimentacao.conta, 
      movimentacao.status
    )
    Movimentacao.checkMovimentacaoWasAddedSuccessfully('Movimentação adicionada com sucesso!')
  });
});