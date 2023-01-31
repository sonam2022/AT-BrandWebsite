import userRegistration from '../TestArcanetinmen/PageObjects/userRegistration'
import 'cypress-v10-preserve-cookie';

import {faker} from '@faker-js/faker';
const nameRandomf = faker.name.firstName();
const nameRandoml = faker.name.lastName();
const domainname = "qarraeah.mailosaur.net";
const emailRandom = faker.internet.email(nameRandomf,nameRandoml,domainname);
const randomPass = faker.internet.password();

describe.skip('User registration',function(){


  const userreg = new userRegistration();

it('Register successfully done',function(){
    cy.visit('/webshop');
   cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();

    userreg.hoverusericon().trigger('mouseover',{ force: true})
    userreg.clicksigninregister().click({ force: true })
    userreg.register().click();
   userreg.newemail().type(emailRandom);
   userreg.newfname().type(nameRandomf);
    userreg.newlname().type(nameRandoml);
  userreg.pwd().type(randomPass);
    userreg.cpwd().type(randomPass);
    cy.log(randomPass);
    userreg.tnc().check({force:true})
    userreg.AcceptTC().check({force:true})
    userreg.submitnuser().click();
    userreg.usersuccess().should("be.visible");
    cy.wait(50000);
  })
  
     it('Account Activation Email', () => {
     const serverId = 'qarraeah';
     console.log(emailRandom);
     
             cy.mailosaurSearchMessages(serverId, {
              sentTo: emailRandom}).then(email => {
               console.log(email.items[0]);
                expect(email.items[0].from[0].email).to.have.string("@dragonshield.com");
                expect(email.items[0].from[0].email).to.have.string("info");
                expect(email.items[0].to[0].email).to.have.string(emailRandom.toLowerCase());
                expect(email.items[0].subject).to.have.string('Activate your account');
                console.log("Test Pass");
              cy.mailosaurGetMessageById(email.items[0].id).then(emailbody =>{
                console.log(emailbody);
             var accountactlink = emailbody.html.links[0].href;
                console.log(accountactlink);
                cy.visit(accountactlink);

              })
userreg.usersuccess1().should('be.visible');
  cy.contains('EU Webshop').click();
      
        })
  
      })

  

})
