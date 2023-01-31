import mywishlist from './PageObjects/mywishlist';

describe.skip('Quick View Pop Up',function(){
    const wishlist = new mywishlist();
   beforeEach(() => {
        cy.visit('/webshop');
       cy.url().should('include','dragonshield');
       cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
       cy.log('Page loaded successfully');
      })

  it.skip('QuickView without login',function(){
   
      
        cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('onmouseover',{force:true}).invoke('show');
           
           // cy.get('a[class="category-sub-link"]').should('be.visible');
           
            cy.get('.dropdown-menu').children().contains('Standard Size').trigger('onmouseover',{force:true}).invoke('show');
            
            cy.get('.dropdown-menu').children().contains('Classic 100').click({force:true});
         
         for(var i=0;i<=4;i++){
            wishlist.addtowishlist().eq(i).trigger('onmouseover').invoke('show').find('.quick-view')
            .click({force:true}).wait(3000);
            cy.get('.modal-content').should('be.visible');
            cy.get('.btn.btn-primary.add-to-cart').eq(0).click({ force: true })
            //cy.get('.modal-content').should('be.visible');
  cy.get('#blockcart-modal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true}).wait(2000);
      
          }
       }) 
it('QuickView with login',function(){
    cy.get('.ti-user').click();
    cy.contains('Sign in/Register').click({force:true});
    cy.wait(10000);
    cy.get('#Email').type('sonamk1@beckett.com');
    cy.get('#Password').type('Test@1234');
    cy.get('.btn').click();
   
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('onmouseover',{force:true}).invoke('show');
       
       // cy.get('a[class="category-sub-link"]').should('be.visible');
       
        cy.get('.dropdown-menu').children().contains('Standard Size').trigger('onmouseover',{force:true}).invoke('show');
        
        cy.get('.dropdown-menu').children().contains('Classic 100').click({force:true});
     
     for(var i=0;i<=4;i++){
wishlist.addtowishlist().eq(i).trigger('onmouseover',{force:true}).invoke('show').find('.quick-view').click({force:true}).wait(3000);
 cy.get('.modal-content').should('be.visible');
if(cy.contains('There are not enough quantities in stock').should('be.visible')){
 cy.get('.modal-content > .modal-header > .close').last().click({force:true}).wait(2000);
} 
else{
   cy.get('.btn.btn-primary.add-to-cart').click({ force: true });
   wishlist.addtowishlist().eq(i).trigger('onmouseover').invoke('show').find('.quick-view').click({force:true}).wait(3000);
}
}     
   })
   })    
