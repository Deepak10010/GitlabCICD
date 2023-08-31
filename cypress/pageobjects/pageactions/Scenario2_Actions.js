/// <reference types="cypress" />


import Scenario2_Elements from "../pageelements/Scenario2_Elements";

export default class Scenario2_Actions{

    constructor(){
        globalThis.element = new Scenario2_Elements();
    }


    clickCookieBtn(){
        element.cookieBtn().click();
    }

   
    clickcategorytile(){
        element.categorytile().click()
    }

  
    clickfirstresult(){
        element.firstresult().click()
    }

    enterplace(){
        element.place().type('Tilburg')
    }


    clickverder(){
        element.verder().click()
    }


    clickresultelement(){
        element.resultelement().click()
    }


    clickdimensionsoptionsBtn(){
        element.dimensions_options_choice().click()
    }


    clickverderBtn(){
        element.verderBtn().click()
    }


    clickminderdan(){
        element.minderdan().click()
    }


    clickouderdan(){
        element.ouderdanbBtn().click()
    }


    clickwanneerBtn(){
        element.wanneerBtn().click()
    }


    clickfotosnee(){
        element.fotosneeBtn().click()
    }


    enterAdditionalInfo(){
        element.additionalInfo().type('Niets voor nu')
    }


    
    enteremailfield(){
        element.emailfield().type('dee@gmail.com')
    }
    

    enternamefield(){
        element.namefield().type('Dee')
    }


    entertelefoonfield(){
        element.telefoonfield().type('31212353123')
    }

}