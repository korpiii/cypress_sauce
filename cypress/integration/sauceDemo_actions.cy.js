/// <reference types="Cypress" />

describe('Test suite for saucedemo', () => {



	 //Pulls data from fixture file before testing starts
	beforeEach(function () {
		cy.fixture('example').then((data) => {
			this.fakeData = data
		})
		cy.visit('https://www.saucedemo.com/');
  	})

	it('Tests Full shopping flow', function () {
 		cy.get('#user-name').type(this.fakeData.username)
		cy.get('#password').type(this.fakeData.password)
		cy.get('#login-button').click()

		//Verifies there are items to buy
		cy.get('.inventory_item:visible').should('have.length', 6)

		//adds two products to cart
		cy.get('#add-to-cart-sauce-labs-backpack').click()
		cy.get('#add-to-cart-sauce-labs-bike-light').click()

		//clicks on shopping cart
		cy.get('.shopping_cart_link').click()

		//Verifies if correct items were added
		cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
		cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light')

		//goes to checkout
		cy.get('#checkout').click()

		//fills form and continues
		cy.get('#first-name').type(this.fakeData.firstName)
		cy.get('#last-name').type(this.fakeData.lastName)
		cy.get('#postal-code').type(this.fakeData.zipCode)
		cy.get('#continue').click()

		//places order and verifies if it's successful
		cy.get('#finish').click()
		cy.get('#checkout_complete_container').should('be.visible')
	
  	})
	it('Verifies lockout user', function () {
 		cy.get('#user-name').type(this.fakeData.lockedOutUsername)
		cy.get('#password').type(this.fakeData.password)
		cy.get('#login-button').click()

		//verifies lockout status
		cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.')
		
	
  	})

})