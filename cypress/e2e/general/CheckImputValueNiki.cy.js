describe('pe site ul Niki',()=>{
    
    it('verific o valoare din imput', () => {

        cy.visit('https://www.nichiduta.ro');
        cy.get('#q_search').click();
        
        const nichidutaSearch =cy.get ('#q_search');
        nichidutaSearch.type('carucior');
        nichidutaSearch.should('have.value','carucior');
        


    })
})