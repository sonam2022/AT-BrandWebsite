describe.skip('DS Checkou EU Demo I',function(){

    before(() => {
    
            cy.visit('/webshop');
           cy.url().should('include','dragonshield'),
           cy.log('Page loaded successfully')
          })

      it('Webshop EU Checkout',function(){
       
                 
            cy.get('.ti-user').click();
            cy.contains('Sign in/Register').click({force:true});
            cy.wait(10000);
            cy.get('#Email').type('sonamk1@beckett.com');
            cy.get('#Password').type('Test@1234');
            cy.get('.btn').click();
            cy.get('.header-top').contains('Solid Color Sleeves').click();
           
            cy.get('a[class="category-sub-link"]').should('be.visible');
           
            cy.get('a[class="category-sub-link"]').contains('Standard Size').click();
            
            cy.get('a[class="category-sub-link"]').contains('Classic 100').click({force:true});
           
             for(var i=1;i<=4;i++){  
      
            const product =`:nth-child(${i}) > .product-miniature > .thumbnail-container > .product-image > .functional-buttons`
            cy.get(product).trigger('onmouseover').invoke('show').find('button').click({force:true}); //products add
          cy.wait(5000)
          cy.get('#blockcart-modal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true}).wait(2000)
          }
                    
           // cy.get('.add-to-cart').invoke('show').click({ multiple: true, force: true });
            //cy.get('#blockcart-modal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})
                       cy.get('a > .ti-bag').click();
            cy.contains('View Cart').click();
            cy.contains('Proceed to checkout').click();
            cy.wait(10000);
            
           /* cy.get('body')
  .children(':contains(My Address), :contains(First name)')  // only one is on the page
  .invoke('text')
  .then(labelText => {
            
                if (labelText.trim() === 'My Address'.should('be.visible')) {
                  cy.contains('Continue').click();
                }  */
                cy.get('body').then(($body) => {
                  if ($body.text().includes('My Address')) { 
                    cy.get('button[name="confirm-addresses"]').scrollIntoView().click({force:true});
                                 
                    
                  }
                
        else{
            cy.contains('First name').should('be.visible');
            cy.get(':nth-child(6) > .col-md-6 > .form-control').type('Dosseringen 94');
            cy.get('.iti__arrow').click();
            cy.get('#iti-0__item-dk').click();
            cy.get('.iti > .form-control').type('22 65 88 92');
            cy.get(':nth-child(9) > .col-md-6 > .form-control').type('Store Heddinge');
            cy.get(':nth-child(10) > .col-md-6 > .form-control').type('4660');
            cy.get(':nth-child(11) > .col-md-6 > .form-control').select('Denmark').should('have.value','20');
            cy.wait(2000);
            cy.get('select[name="id_state"]').select('Sjælland').should('have.value','474');
            cy.get('.form-footer > .continue').click();
           
           }  
        })
        
           cy.get('button').contains('Continue Payment').click();
           cy.get('.display-promo > .collapse-button').click();
           cy.get('.promo-input').type('testaws');
           cy.get('form > .btn > span').click();

        })
    }) 
   
        


        