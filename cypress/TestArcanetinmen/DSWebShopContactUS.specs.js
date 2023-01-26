import {faker} from '@faker-js/faker';

const message =  faker.lorem.lines();
describe('Contact Us Form',function(){
       beforeEach(() => {
        
         cy.launchwebsite("/webshop");
           cy.get('.ti-user').click();
           cy.contains('Sign in/Register').click({force:true});
           cy.wait(10000);
           cy.DragonShieldLogin("sonam.kaul@arcanetinmen.com","Test@1234");

          })

          it('Contact Us Form',function(){
cy.get('#footer').scrollIntoView().contains('Contact Us').click({force:true});
cy.get('select').first().select('Webmaster');
cy.get('select').last().select(1);
cy.get('#msgText').type(message);
cy.get('[name="submitMessage"]').click();
cy.contains('Your message has been successfully sent to our team.').should('be.visible');


          })
        })