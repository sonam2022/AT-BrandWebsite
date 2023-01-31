
import 'cypress-iframe'
describe.skip('Design Sleeve Crafter',function(){
    beforeEach(() => {
     
         cy.visit('/webshop');
        cy.url().should('include','dragonshield');
        cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
        cy.log('Page loaded successfully');
         cy.fixture("newimage.jpg").then(function(image){
         globalThis.image = image; 
         }) 
       })

it.skip('Design Sleeve Crafter',function(){

    cy.get('.btn').contains("Sleeve Crafter").click({force:true});
    cy.get('#customizecls').click();
    cy.get('#customize').click().wait(10000);
    cy.frameLoaded('#tshirtIFrame');
    cy.iframe('#tshirtIFrame').find('span').contains("Add designs").then(($adddesigns)=>{
        cy.get($adddesigns).click().wait(5000);
        cy.iframe('#tshirtIFrame').find('.label-title').contains("Backgrounds").then(($backgrounds)=>{
            cy.get($backgrounds).click().wait(5000);
            cy.iframe('#tshirtIFrame').find('#background-8').then(($color)=>{
                cy.get($color).click().wait(5000);
                cy.iframe('#tshirtIFrame').find('button').contains('Order Option').then(($order)=>{
                    cy.get($order).click().wait(10000);
                    cy.iframe('#tshirtIFrame').find('.custom-control-label').contains("I approve the").then(($check)=>{
                        cy.get($check).click().wait(5000);
 cy.iframe('#tshirtIFrame').find('.cart-text').contains('Add to cart').then(($order2)=>{
                    cy.get($order2).click({force:true}).wait(5000);
                    cy.get('a').contains('Sleeve Crafter').should('be.visible');
 })
})
                })
            })
        })
    })
})


it("Design Sleeve Crafter",()=>{
    const p = 'newimage.jpg'

    cy.get('.btn').contains("Sleeve Crafter").click({force:true});
    cy.get('#customizecls').click();
    cy.get('#customize').click().wait(10000);
    cy.frameLoaded('#tshirtIFrame');
    cy.iframe('#tshirtIFrame').find('span').contains("Upload design").then(($uploaddesign)=>{
        cy.get($uploaddesign).click().wait(10000);
    })

        cy.iframe('#tshirtIFrame').find('.nx-drop-box').then(($browsefile)=>{
            cy.get($browsefile).selectFile('cypress/fixtures/newimage.jpg', { action: 'drag-drop' }).wait(10000); 
        })

        cy.iframe('#tshirtIFrame').find('button').contains('Done').then(($done)=>{
            cy.get($done).click().wait(10000);
        })
            cy.iframe('#tshirtIFrame').find('button').contains('Order Option').then(($order)=>{
                cy.get($order).click().wait(10000);
            })
                cy.iframe('#tshirtIFrame').find('.custom-control-label').contains("I approve the").then(($check)=>{
                    cy.get($check).click().wait(10000);
                })
cy.iframe('#tshirtIFrame').find('.cart-text').contains('Add to cart').then(($order2)=>{
                cy.get($order2).click({force:true}).wait(10000);
})
                cy.get('a').contains('Sleeve Crafter').should('be.visible');
})
                })
            
