import { recurse } from 'cypress-recurse';

describe.skip('Product Listing Pagination',()=>{
    
 
beforeEach(()=>{

        cy.fixture("logindetails.json").then(function(data){
            globalThis.logindata = data;
            cy.log(logindata);

    })
})

it('Product Listing Pagination',()=>{

    cy.visit('/webshop' ,'{timeout:50000000}')

    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

    cy.get('.ti-user').trigger('mouseover')

cy.contains('Sign in/Register').click({ force: true })

cy.get('#Email').type(logindata.email);

cy.get('#Password').type(logindata.password);

cy.get('.btn').eq(0).click()

cy.get('.leo-top-menu > .nav > .active > .nav-link > .menu-title').click({force:true}).wait(20000)


const pages = cy.get(".page-list.clearfix.text-md-right.text-xs-center");

const product =':nth-child(1) > .product-miniature > .thumbnail-container > .product-image > .functional-buttons > .pro-info-onhover > a'

recurse(

    ()=> cy.get('.next'),($button)=>$button.hasClass('disabled')=='disabled',

   {
length:pages.length,
    log: false,
    timeout: 50000,
    delay: 500,

post(){

           cy.log("start");
           cy.get('.next>.fa').should('be.visible').click({force:true});
   cy.log("end");
   
}

})

})
})