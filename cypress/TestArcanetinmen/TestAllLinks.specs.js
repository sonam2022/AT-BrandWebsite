describe.skip('AT Brandsite Automation Suite I',function(){

    before(() => {
    
            cy.visit('https://www.arcanetinmen.com');
           cy.url().should('include','arcanetinmen'),
           cy.log('Page loaded successfully')
          })

 it('AT Brandsite Sanity I Footer links',function(){

            const pages = ['Contact','Dragon Shield', 'BOARD GAME SLEEVES','BECKETT SHIELD','Distributors login']
            pages.forEach(page => {
             cy.get('footer').scrollIntoView().contains
              cy.get('footer').contains(page).click({force:true}),      
              cy.window().then(win => win.location.href = "/")
              console.log(cy.title())
                  })
                })
              })

