import {faker} from '@faker-js/faker';

const email = faker.internet.email();

describe.skip('DSWebshopSubscribe',function(){
 beforeEach(() => {
cy.visit('/webshop');
cy.url().should('include','dragonshield');
cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
cy.log('Page loaded successfully');
 })
it('Subscribe for NewsLetter',()=>{

   cy.get('[name="email1"]').type(email);
cy.get('.btn.btn-outline.float-xs-right').last().click();
//cy.get('body').contains("You have successfully subscribed to this newsletter.").should('be.visible');


        })
    })
