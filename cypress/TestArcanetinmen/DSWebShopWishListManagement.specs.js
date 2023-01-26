import wishListManagement from '../TestArcanetinmen/PageObjects/mywishlist';
import mywishlist from '../TestArcanetinmen/PageObjects/mywishlist';

describe('Wishlist Management',function(){
const wishlist = new mywishlist();
   beforeEach(() => {
    
        cy.visit('/webshop');
       cy.url().should('include','dragonshield');
       cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
       cy.log('Page loaded successfully');
      })

  it.skip('Add to wishlist without login',function(){
   
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('onmouseover',{force:true}).invoke('show');
       
       // cy.get('a[class="category-sub-link"]').should('be.visible');
       
        cy.get('.dropdown-menu').children().contains('Standard Size').trigger('onmouseover',{force:true}).invoke('show');
        
        cy.get('.dropdown-menu').children().contains('Classic 100').click({force:true});
     
     for(var i=0;i<=4;i++){
        wishlist.addtowishlist().eq(i).trigger('onmouseover',{force:true}).invoke('show').find('.leo-wishlist-button.btn-product.btn-primary.btn').click({force:true});
        
cy.contains('You must be logged in to manage your wishlist').should('be.visible');
    
    }

})
it.skip('Add to wishlist with login',function(){
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
        wishlist.addtowishlist().eq(i).trigger('onmouseover',{force:true}).invoke('show').find('.leo-wishlist-button.btn-product.btn-primary.btn').click({force:true});
        cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible');
        cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').then(($body) => {
            if($body.text().includes("The product has been successfully removed from your wishlist. View your wishlist."))
            {
                cy.log("if started successfully.")
                cy.get('.modal-content > .modal-header > .close').first().click({force:true}).wait(2000);
                wishlist.addtowishlist().eq(i).trigger('onmouseover',{force:true}).invoke('show').find('.leo-wishlist-button.btn-product.btn-primary.btn').click({force:true}).wait(3000);    
             //   cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').should('have.text','The product has been successfully added to your wishlist. View your wishlist.');
   cy.get('.modal-content > .modal-header > .close').first().click({force:true}).wait(2000);
cy.log("if executed successfully");     
cy.break;    
}
        
else{
    cy.log("else started successfully");
wishlist.addtowishlist().eq(i).trigger('onmouseover',{force:true}).invoke('show').find('.leo-wishlist-button.btn-product.btn-primary.btn').click({force:true});
cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible');
// cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').should('have.text','The product has been successfully added to your wishlist. View your wishlist.');
cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').first().click({force:true}).wait(2000);
cy.log("else exceuted successfully");
cy.break;
    
} 
        }) 
    }     
})

it('wishListManagement',function(){
    cy.get('.ti-user').click();
    cy.contains('Sign in/Register').click({force:true});
    cy.wait(10000);
    cy.get('#Email').type('sonamk1@beckett.com');
    cy.get('#Password').type('Test@1234');
    cy.get('.btn').click();
   
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('onmouseover',{force:true}).invoke('show');   
        cy.get('.dropdown-menu').children().contains('Standard Size').trigger('onmouseover',{force:true}).invoke('show'); 
        cy.get('.dropdown-menu').children().contains('Classic 100').click({force:true});
        wishlist.addtowishlist().eq(1).trigger('onmouseover',{force:true}).invoke('show').find('.leo-wishlist-button.btn-product.btn-primary.btn').click({force:true});

cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').should('be.visible');
 cy.get('.leo-modal-wishlist > .modal-dialog > .modal-content > .modal-header > .modal-title').contains('View your wishlist.').invoke('removeAttr', 'target').click({force:true}).wait(2000);
        cy.get('.leo-wishlistproduct-item').should('be.visible');
const item = cy.get('.leo-wishlistproduct-item').get.length;
       cy.log(item);
       if(item>0){
       for(var i = 0;i<=item;i++){
cy.get(item).eq(i).trigger('onmouseover',{force:true}).invoke('show');
cy.get('.leo-wishlist-button-delete.btn').click({multiple:true});
cy.break;

       }
    }
    else{
    cy.go('back')
    }
    })
})

