describe.skip('DSWebshopFooterLinks',function(){
    beforeEach(() => {
   cy.visit('/webshop');
   cy.url().should('include','dragonshield');
   cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
   cy.log('Page loaded successfully');
    })

    it('Company Footer Links',() =>{


        const pages = ['About Us','Distributors', 'Media','News','Store Locator']
        pages.forEach(page => {
         cy.get('#footer').scrollIntoView().contains
          cy.get('#footer').contains(page).click({force:true});   
          cy.window().then(win => win.location.href = "/webshop");
          console.log(cy.title());
        })
              })

              it('Services Footer Links',() =>{


                const pages = ['Terms & Conditions','Privacy Policy', 'Cancellations & Returns','Shipping & Delivery','Contact Us']
                pages.forEach(page => {
                 cy.get('#footer').scrollIntoView().contains
                  cy.get('#footer').contains(page).click({force:true});   
                  cy.window().then(win => win.location.href = "/webshop");
                  console.log(cy.title());
                })
                      })



            })










