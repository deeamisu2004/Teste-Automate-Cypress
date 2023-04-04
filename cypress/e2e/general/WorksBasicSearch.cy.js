describe('Site Niki', () => {

// Testul numarul 1
 it('functioneaza cu o cautare basic' ,() =>{

    cy.visit('https://www.nichiduta.ro');
    cy.get('.header-input-search').type('carucior ').type('{enter}');

    cy.get('#prod_no').should('exist');


    })
})
