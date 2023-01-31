describe.skip('DSWebshopSearch',function(){
    beforeEach(() => {
   cy.visit('/webshop');
   cy.url().should('include','dragonshield');
   cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
   cy.log('Page loaded successfully');
    })


    it('DS Webshop Search Feature',()=>{


        cy.get('#leo_search_block_top').click();
        cy.get('[name="search_query"]').type('Matte').wait(5000);
        cy.get('div>ul>li').children('.lps-result-content').eq(3).click();




    })
})