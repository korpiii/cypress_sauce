/// <reference types="Cypress" />

describe('Test suite for saucedemo', () => {

	let itemName1, itemName2

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

  	})
})