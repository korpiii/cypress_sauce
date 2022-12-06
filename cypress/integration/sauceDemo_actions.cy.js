/// <reference types="Cypress" />

describe('Full shopping flow', () => {

	 //Pulls data from fixture file before testing starts
	before(function () {
		cy.fixture('example').then((data) => {
			this.data = data
		})
  	})

	it('Should log in', function () {
		cy.visit('https://www.saucedemo.com/');
 		cy.get('#user-name').type(this.data.username);
		cy.get('#password').type(this.data.password);
		cy.get('#login-button').click();
  	})
})