
describe.skip('AT Brandsite Automation Suite V',function(){

    before(() => {
    
            cy.visit('/');
           cy.url().should('include','arcanetinmen'),
           cy.log('Page loaded successfully')
          })
    
    it('AT Brandsite Sanity II Read More',function(){

        cy.get('a').contains("Read more").click(),
        cy.log(cy.url())
        
    })
})