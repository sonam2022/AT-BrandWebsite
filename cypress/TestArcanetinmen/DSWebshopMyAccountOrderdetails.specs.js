describe.skip('Navigate to My Account_Order Details',()=>{
    beforeEach(function () {
            cy.visit('/webshop');
            cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
            cy.get('.ti-user').click();
            cy.contains('Sign in/Register').click({force:true});
            cy.wait(10000);
            cy.get('#Email').type('sonamk1@beckett.com');
            cy.get('#Password').type('Test@1234');
            cy.get('.btn').click();
           // cy.contains('Free shipping on orders of 74 euros or more').should('be.visible');
            cy.wait(10000);
            cy.get('.ti-user').eq(1).click({force:true});
            cy.contains('My account').click({force:true});
            cy.wait(10000);
            cy.get('h1').contains('Your account').should('be.visible');
    })
    it("Order details and History Management",()=>{
        cy.get('span[class="link-item"]').contains('Order history and details').click();
        cy.get('tbody').each(($el,
            index, $list) => {
               // grabbing all text from second column
               const txt = $el.text();
               console.log(txt);
               // checking the matching condition
               if (txt.includes('Sleeve Crafter')){
                  // capturing the next sibling with the help of next() method
for (var i=1;i<=10;i++){
console.log(i);
    const product = `tbody > :nth-child(${i}) > :nth-child(${i})`
                  cy.get(product)
                  .eq(index).next().then(function(desc){
                     // capturing the text of next sibling
                     const rsl = desc.text();
                     console.log(rsl);
                     //assertion to verify the text
                    cy.contains("Details").each((el) => {
                            cy.wrap(el).click();
                            console.log(cy.url());
                            cy.go('back');
                        })
                  })
                }
               }
            })  
             })
          }) 
