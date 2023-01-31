import menupom from '../TestArcanetinmen/PageObjects/menupom';

describe.skip('Visit Each menu and submenu',()=>{

    const menuhomepage = new menupom();

    before(()=>{
    cy.visit('/webshop');
    cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();

    })

it('Visit Menu of web shop for Solid Color Sleeves>Standard Size',function(){

    const pages = ['Matte Dual 100','Matte 100', 'Perfect Fit','Matte Non-Glare 100','Classic 100'];
    
    for(var i=0;i<=pages.length;i++){

menuhomepage.hoverOnSolidColorsleeves();
menuhomepage.hoverOnSolidColorsleevesStandardSize();
menuhomepage.clickOnSubMenu().contains(pages[i]).click({force:true});
cy.window().then(win => win.location.href = "/webshop");

    }
})


it('Visit Menu of web shop for Solid Color Sleeves>Japanese Size',function(){

    const japanpages = ['Classic 60','Matte 60', 'Perfect Fit','Matte Dual 60'];
    
    for(var i=0;i<=japanpages.length;i++){

        menuhomepage.hoverOnSolidColorsleeves();
menuhomepage.hoverOnSolidColorsleevesJapaneseSize();
menuhomepage.clickOnchildSubMenu().contains(japanpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
 
    }
})

it('Visit Menu of web shop for Art Sleeves>Standard Size',function(){

    const artsleeves = ['Standard Size','Japanese Size'];
    for(var i=0;i<=artsleeves.length;i++){
    menuhomepage.hoverOnArtsleeves();
    menuhomepage.clickOnSubMenu().contains(artsleeves[i]).click({force:true});
        cy.window().then(win => win.location.href = "/webshop");
       
    }
    })


it('Visit Menu of web shop for Roleplaying',function(){
    menuhomepage.clickOnRoleplaying();
    

})

it('Visit Menu of web shop for Other Gaming Accessories>Albums',function(){

    const albumpages = ['Portfolio','Binder Pages', 'Zipster Binder','Slipcase Binder'];
    
    for(var i=0;i<=albumpages.length;i++){

menuhomepage.clickOnOtherGamingAccessories();
menuhomepage.clickOnSubMenu().children().contains('Albums').trigger('mouseover',{force:true}).invoke('show')
menuhomepage.clickOnchildSubMenu().contains(albumpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
   
    }
})


it('Visit Menu of web shop for Other Gaming Accessories>decks',function(){

    const deckpages = ['Deck Shell','Magic Carpet', 'Nest','Nest+','Cube Shell','Strongbox','Double Shell'];
    
    for(var i=0;i<=deckpages.length;i++){

        menuhomepage.clickOnOtherGamingAccessories();
        menuhomepage.clickOnSubMenu().children().contains('Deck Boxes').trigger('mouseover',{force:true}).invoke('show')
        menuhomepage.clickOnchildSubMenu().contains(deckpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
  
    }
})

it('Visit Menu of web shop for OGA Others',function(){

    const ogaPages = ['Playmats', 'Miscellaneous'];
    
    for(var i=0;i<=ogaPages.length;i++){

        menuhomepage.clickOnOtherGamingAccessories();
        menuhomepage.clickOnSubMenu().children().contains(ogaPages[i]).click({force:true})
cy.window().then(win => win.location.href = "/webshop");

    }
})

it('Visit Menu of web shop for Licensed Products>decks',function(){

    const licensedPages = ['Licensed Sleeves','Licensed Albums', 'Licensed Playmats'];
    
    for(var i=0;i<=licensedPages.length;i++){

menuhomepage.clickOnLicensedProducts();
menuhomepage.clickOnSubMenu().children().contains(licensedPages[i]).click({force:true});
cy.window().then(win => win.location.href = "/webshop");

    }
})


})