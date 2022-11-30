/// <reference types="Cypress" />

describe('Full shopping flow', () => {
  it('Should visit store homepage', () => {
    cy.visit('https://www.saucedemo.com/');
  })
})