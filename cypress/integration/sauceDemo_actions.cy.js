/// <reference types="Cypress" />

describe('Test suite for saucedemo', () => {



	 //Pulls data from fixture file before testing starts
	before(function () {
		cy.fixture('example').then((data) => {
			this.fakeData = data
		})
  	})

	it('Tests Full shopping flow', function () {
		cy.visit('https://www.saucedemo.com/');
 		cy.get('#user-name').type(this.fakeData.username)
		cy.get('#password').type(this.fakeData.password)
		cy.get('#login-button').click()

		//Verifies there are items to buy
		cy.get('.inventory_item:visible').should('have.length', 6)

		//adds two products to cart
		cy.get('#add-to-cart-sauce-labs-backpack').click()
		cy.get('#add-to-cart-sauce-labs-bike-light').click()



  	})
})