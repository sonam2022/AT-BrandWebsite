//Test Suite for AT BrandWebsite

describe.skip('AT Brandsite Automation Suite II',function(){

before(() => {

        cy.visit('/');
       cy.url().should('include','arcanetinmen'),
       cy.log('Page loaded successfully')
      })

it('AT Brandsite Sanity II Menu Links',function(){

const path = 'https://www.arcanetinmen.com';
cy.get('ul[id="menu-header"]>li').each((el) => {
cy.url().then(($url) => {
if($url.includes(path)){
    cy.wrap(el).click();
    console.log(cy.url());
}
else
{
   cy.go("back");
   cy.break;
}
})

    })

    })
})
