describe.skip("alert",function(){

    it('google',function(){

        // url of website
     
     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     
     cy.on('window:alert',function(AlertText) // for alert type
     
     {expect(AlertText).eql('I am a JS Alert')
     
     })
        
     cy.contains('Click for JS Alert').click()
     
     cy.get('#result').should('contain','You successfully clicked an alert') 
     
     cy.on('window:confirm',function(ConfirmAlertText) // for Confirm-type alert
     
     {
        expect(ConfirmAlertText).eql('I am a JS Confirm')
        
     })
     
     cy.contains('Click for JS Confirm').click()
     
     cy.get('#result').should('contain','You clicked: Ok')
     
     cy.window().then(function($promptelement){   // for prompt-type alert
     
        cy.stub($promptelement, "prompt").returns("Hello");
     
        cy.contains('Click for JS Prompt').click()
     
        cy.get('#result').should('contain','You entered: Hello')
     
     })
     
     })
})
