/// <reference types="cypress" />


const or = require("../../locators.json")

export default class Scenario2_Elements{

      
    cookieBtn(){
        return cy.get(or.Homepagelocator.cookieBtn)
    }


    categorytile(){
        return cy.get(or.Scenario2_locators.category)
    }


    firstresult(){
        return cy.get(or.Scenario2_locators.FirstResultElement)
    }


    place(){
        return cy.xpath(or.Scenario2_locators.place)
    }


    verder(){
        return cy.get(or.Scenario2_locators.Further)
    }

    resultelement(){
        return cy.get(or.Scenario2_locators.PageResult)
    }


    dimensions_options_choice(){
        return cy.get(or.Scenario2_locators.dimensions_options)
    }

    verderBtn(){
        return cy.xpath(or.Scenario2_locators.Verder)
    }


    minderdan(){
        return cy.get(or.Scenario2_locators.minder_dan_20m)
    }


    ouderdanbBtn(){
        return cy.get(or.Scenario2_locators.ouderdan2jaar)
    }


    wanneerBtn(){
        return cy.get(or.Scenario2_locators.wanneer1)
    }


    fotosneeBtn(){
        return cy.get(or.Scenario2_locators.fotos_nee)
    }


    additionalInfo(){
        return cy.get(or.Scenario2_locators.sce2_AdditionalInfoField)
    }


   
    emailfield(){
        return cy.get(or.Scenario2_locators.sce2_Email)
    }


    namefield(){
        return cy.get(or.Scenario2_locators.sce2_Name)
    }


    telefoonfield(){
        return cy.get(or.Scenario2_locators.sce2_Telephone)
    }

}