describe.skip('DS Checkout EU Demo II',function(){

    before(() => {
    
        cy.visit('/webshop');
       cy.url().should('include','dragonshield');
       cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
       cy.log('Page loaded successfully');
       cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
      })

  it('Webshop EU Guest Checkout',function(){
   
        cy.get('.header-top').contains('Solid Color Sleeves').click({force: true});
       
        cy.get('a[class="category-sub-link"]').should('be.visible');
       
        cy.get('a[class="category-sub-link"]').contains('Standard Size').click({force: true});
        
        cy.get('a[class="category-sub-link"]').contains('Classic 100').click({force:true});
     
     for(var i=1;i<=4;i++){
     const product =`:nth-child(${i}) > .product-miniature > .thumbnail-container > .product-image > .functional-buttons`
     cy.get(product)
     .trigger('onmouseover').invoke('show').find('button').click({force:true}); //products add
     cy.wait(5000)
     cy.get('#blockcart-modal > .modal-dialog > .modal-content > .modal-header > .close').click({force:true}).wait(2000)
     }
     cy.get('a > .ti-bag').click({force:true})   
    
    
    cy.wait(5000)
    cy.contains('Checkout').click({force:true})
    cy.get(':nth-child(1) > .col-md-6 > .form-control').type('Anjali')
    cy.get('#customer-form > section > :nth-child(2) > .col-md-6 > .form-control').type('upadhyay')
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type('test@133.com')
    cy.get('.iti__arrow').click()
    cy.get('#iti-0__item-dk').click()
    cy.get('.iti > .form-control').type('22 65 88 92')
    cy.get('[type="checkbox"]').check({force:true})
    cy.get('button').contains('Continue').eq(0).click()
    cy.get(':nth-child(6) > .col-md-6 > .form-control').type('Dosseringen 94')
    cy.get('.iti__arrow').click()
    cy.get('#iti-0__item-dk').click()
    cy.get('.iti > .form-control').type('22 65 88 92')
    cy.get(':nth-child(9) > .col-md-6 > .form-control').type('Store Heddinge')
    cy.get(':nth-child(10) > .col-md-6 > .form-control').type('4660')
    cy.get(':nth-child(11) > .col-md-6 > .form-control').select('Denmark').should('have.value','20')
    cy.wait(2000)
    cy.get('select[name="id_state"]').select('Sjælland').should('have.value','474');
    cy.get('[type="checkbox"]').check({force:true})
    cy.get('.form-footer > .continue').eq(1).click({force:true});
    cy.wait(2000)
    cy.get('.display-promo > .collapse-button').click()
    cy.get('.promo-input').type('testaws')
    cy.get('.form-footer > .continue').eq(2).click({force:true});
   cy.wait(2000)
   cy.get('button').contains('Continue Payment').click({force:true})
   cy.get('.display-promo > .collapse-button').click();
           cy.get('.promo-input').type('testaws');
           cy.get('form > .btn > span').click();

})
})