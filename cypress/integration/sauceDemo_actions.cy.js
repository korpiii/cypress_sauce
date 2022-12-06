/// <reference types="Cypress" />

describe('Full shopping flow', () => {

	 //Pulls data from fixture file before testing starts
	before(function () {
		cy.fixture('example').then((data) => {
			this.fakeData = data
		})
  	})

	it('Logs in', function () {
		cy.visit('https://www.saucedemo.com/');
 		cy.get('#user-name').type(this.fakeData.username)
		cy.get('#password').type(this.fakeData.password)
		cy.get('#login-button').click()
  	})

	it('Verifies there are items to buy', () => {
		cy.get('.inventory_item').should('have.length.at.least', 1)
    })

	it('Adds items to cart', () => {
		cy.get('#add-to-cart-sauce-labs-backpack').click()
		cy.get('#add-to-cart-sauce-labs-bike-light').click()

    })

})