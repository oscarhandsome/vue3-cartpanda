// https://on.cypress.io/api

describe('Dashboard Page', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Dashboard')

    cy.visit('/orders')
    cy.contains('div', 'Orders')

    cy.visit('/payments')
    cy.contains('div', 'Payments')
  })
})
