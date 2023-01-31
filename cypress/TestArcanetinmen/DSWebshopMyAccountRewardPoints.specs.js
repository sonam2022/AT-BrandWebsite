import {recurse} from 'cypress-recurse'

describe.skip('Navigate to My Account_Rewards_History',()=>{
    beforeEach(function () {
            cy.visit('/webshop');
            cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
            cy.get('.ti-user').click();
            cy.contains('Sign in/Register').click({force:true});
            cy.wait(10000);
            cy.get('#Email').type('sonamk1@beckett.com');
            cy.get('#Password').type('Test@1234');
            cy.get('.btn').click();
         //   cy.contains('Free shipping on orders of 74 euros or more').should('be.visible');
            cy.wait(10000);
            cy.get('.ti-user').eq(1).click({force:true});
            cy.contains('My account').click({force:true});
            cy.wait(10000);
            cy.get('h1').contains('Your account').should('be.visible');
    })
    it("Rewards Management",()=>{
        const pagelength =  "ul>li>a";

        cy.get('span[class="link-item"]').contains('My rewards account').click();
     recurse(
 ()=> cy.get('.next'),($button)=>$button.hasClass('disabled')=='disabled',

{
    
    limit:pagelength.length,
    log: false,
    timeout: 20000,
    delay: 500,
    post(){
        cy.log("start");
        cy.get('.next ').click();
        cy.log("end");


    }
}
     )
})
})
