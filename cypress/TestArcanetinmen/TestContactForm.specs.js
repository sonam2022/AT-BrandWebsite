describe.skip('AT Brandsite Automation Suite III',function(){

    before(() => {
    
            cy.visit('/');
           cy.url().should('include','arcanetinmen'),
           cy.log('Page loaded successfully')
          })


 it('AT Brandsite Sanity Contact Form',function(){

cy.get('a').contains('About & Contact').click();
cy.get('input[name="your-name"]').type('Test Name');
cy.get('input[name="your-email"]').type('Test@yopmail.com');
cy.get('input[name="your-company"]').type('Test Subject');
cy.get('select').select(1);
cy.get('textarea[name="your-message"]').type('Test Subject');
cy.get('iframe')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();
            
            cy.wait(50000);
cy.get('input[type="submit"]').click();
cy.contains('Thank you for your message. It has been sent.').should('be.visible');
cy.screenshot();
})
})
