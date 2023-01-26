describe('Navigate to My Account',()=>{
 
    beforeEach(function () {
        cy.fixture('address.json').then(function(data){
          globalThis.addressData=data
           console.log(data);
            console.log(addressData.City);
            cy.launchwebsite('/webshop');
            cy.get('.ti-user').click();
            cy.contains('Sign in/Register').click({force:true});
            cy.wait(10000);
            cy.DragonShieldLogin("sonam.kaul@arcanetinmen.com","Test@1234");
           // cy.get('#Email').type('sonamk1@beckett.com');
           // cy.get('#Password').type('Test@1234');
           // cy.get('.btn').click();

           
            //cy.contains('Free shipping on orders of 74 euros or more').should('be.visible');
            cy.wait(10000);
            cy.get('.ti-user').eq(1).click({force:true});
            cy.contains('My account').click({force:true});
            cy.wait(10000);
            cy.get('h1').contains('Your account').should('be.visible');

        });
    
    })
    it('Navigate to My Address',function () {


    cy.get('body').then(($body) => {
    if($body.text().includes("Add first address"))
    {
cy.get('span[class="link-item"]').contains('Add first address').click();
cy.get('input[name="address1"]').type(addressData.Address1);
cy.get('input[name="phone"]').eq(0).type(addressData.Phonenumber);
cy.get('input[name="city"]').type(addressData.City);
cy.get('select[name="id_country"]').select(addressData.Country);
cy.get('input[name="postcode"]').type(addressData.Zipcode);
cy.get('select[name="id_country"]').should('have.value',10);
cy.wait(5000);
cy.get('select[name="id_state"]').select(addressData.State);
cy.get('select[name="id_state"]').should('have.value',229);
cy.get('.btn').contains('Save').click();

}
else{
    cy.get('span[class="link-item"]').contains("Addresses").should('be.visible');
    cy.get('span[class="link-item"]').contains("Addresses").click();
    cy.contains('My Address').should('be.visible');
    cy.contains('Update').eq(0).click();
    cy.get('input[name="city"]').clear();
    cy.log(addressData.City);
    cy.get('input[name="city"]').type(addressData.City);
cy.wait(5000);
cy.get(".btn").contains("Save").click();
cy.contains("successfully").should('be.visible')
cy.wait(5000);
cy.contains("Delete").click();
cy.contains("successfully deleted").should('be.visible')
}

})
})
})