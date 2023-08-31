/// <reference types="cypress" />

import Scenario2_Actions from "../../pageobjects/pageactions/Scenario2_Actions";

const allure = Cypress.Allure.reporter.getInterface();


describe("Testing the Scenario 2 ",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      const sce_2 = new Scenario2_Actions()

      beforeEach(()=>{
        
        cy.visit("http://localhost:3000/") 
        sce_2.clickCookieBtn()   
        
        cy.wait(10000);

    })   


    it('Testing Scenario 2', () => {

        
        cy.wait(4000);
          allure.feature("Testing Scenario 2")
  
          
         sce_2.clickcategorytile()

         cy.wait(10000);
  
         cy.contains('Vind een top 10').should('be.visible');

         cy.scrollTo(0, 700);

         sce_2.clickfirstresult()

         cy.wait(7000);


         cy.contains('Waar zoek je een schilder?').should('be.visible');


         sce_2.enterplace()

         cy.wait(5000);

         cy.get('body').click()

         sce_2.clickverder()

         cy.wait(6000);
         
         sce_2.clickresultelement()

         cy.wait(10000);

         sce_2.clickverderBtn()

         cy.wait(10000)

         sce_2.clickminderdan()

         cy.wait(5000)
         cy.contains('Hoe oud is de woning?').should('be.visible');


         sce_2.clickouderdan()
         cy.wait(6000)

         sce_2.clickwanneerBtn()
         cy.wait(6000)


         sce_2.clickwanneerBtn()
         cy.wait(5000)

         sce_2.clickfotosnee()
         cy.wait(6000)

         sce_2.enterAdditionalInfo()
         cy.wait(6000)


         sce_2.clickverderBtn()
         cy.wait(6000)

         sce_2.enteremailfield()
         cy.wait(6000)


         sce_2.clickverderBtn()
         cy.wait(6000)


         sce_2.enternamefield()

         sce_2.clickverderBtn()
         cy.wait(6000)


         sce_2.entertelefoonfield()
         cy.wait(2000)

         sce_2.clickverderBtn()
         cy.wait(9000)


         cy.contains('Je aanvraag is verstuurd!').should('be.visible');

         sce_2.clickverderBtn()
         cy.wait(3000)
       
          
        });

})