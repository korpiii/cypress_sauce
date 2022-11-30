/// <reference types="Cypress" />

describe('Full shopping flow', () => {

	 //Pulls data from fixture file before testing starts
	before(function () {
		cy.fixture('example').then(function (data) {
		this.data = data;
		})
  	})

	it('Should visit store homepage', () => {
    cy.visit('https://www.saucedemo.com/');
  })

})