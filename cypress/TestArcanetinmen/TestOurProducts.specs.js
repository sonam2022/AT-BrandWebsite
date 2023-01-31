describe.skip('AT Brandsite Automation Suite IV',function(){

    before(() => {
    
            cy.visit('/');
           cy.url().should('include','arcanetinmen'),
           cy.log('Page loaded successfully')
          })

 it('AT Brandsite Sanity I Middle links',function(){
    const path = 'https://www.arcanetinmen.com';
    cy.get('a[class="main-link"]').each((el) => {
        cy.url().then(($url) => {
        if($url.includes(path)){
            cy.wrap(el).click({force:true});
            console.log(cy.url());
            cy.break;
        }
        })
                  })
                })
              })