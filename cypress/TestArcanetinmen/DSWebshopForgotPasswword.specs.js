import forgotPassword from '../TestArcanetinmen/PageObjects/forgotPassword';
import {faker} from '@faker-js/faker';

describe.skip('forget password',()=>{
 const forpwd = new forgotPassword();
beforeEach(function(){

cy.fixture("forgotpasswordemails.json").then(function(data){
globalThis.emaildata = data;
cy.visit('https://auth.dragonshield.com/Account/ForgotPassword');

})
})

it('Forgot password screen',() =>{

forpwd.entermail().type(emaildata.email);
forpwd.clickButton().click();
cy.wait(100000);
})
it('Gets Password Reset email from Mailosaur', () => {
    const serverId = 'qarraeah';
    console.log(emaildata.email);
    cy.mailosaurGetMessage(serverId, {
        sentTo: emaildata.email
    }).then(email => {
        console.log(email);
        expect(email.subject).to.have.string('Reset your password');
     var passwordResetLink = email.text.links[0].href;
     console.log(passwordResetLink);
     cy.visit(passwordResetLink,{force:true});

})
        const validPassword = faker.internet.password();
        console.log(validPassword);
        cy.contains('Reset your password').should('be.visible');
        forpwd.enterpassword().type(validPassword);
        forpwd.enterconfirmpassword() .type(validPassword);
        forpwd.clickButton().click();
        cy.log(cy.url());
        cy.contains("Reset confirmed!").should('be.visible');
        cy.get('.btn').click();
     //   cy.visit("https://auth.dragonshield.com/Account/Login");
        forpwd.entermail().type(emaildata.email);
            forpwd.enterpassword.type(validPassword);
            forpwd.clickButton().click();

    })
})
