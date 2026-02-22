/// <reference types="cypress" />

import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import IDCardDashboardPage from '../../pages/IDCardDashboardPage';
 
describe('ID Card Dashboard Test Suite', () => {



  beforeEach(() => {
    
    cy.login(idcardtestData.login.username, idcardtestData.login.password);
  });
  it("Tc_001 verify logo is visible on the dashboard",() => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
      IDCardDashboardPageObj.verifyLogoVisible(); 
  });
});
  it("Tc_002 verify that click on the create template menu successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    cy.wait(2000); 
    const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
    const IDCardDashboardPageObj = new IDCardDashboardPage() ;

    IDCardDashboardPageObj.clickCreateTemplate();
    cy.wait(5000);
    });
  });

  it("Tc_003 verify that click on the Field Settings menu successfully", () => {
   cy.origin(Cypress.env('IDCARD_URL'), () => { 
    const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
    const IDCardDashboardPageObj = new IDCardDashboardPage() ;
   

    IDCardDashboardPageObj.clickFieldSettings();
    cy.wait(5000);
   })
  });

  it("Tc_004 verify that click on the Assets menu successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => { 
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
      cy.wait(2000);

      IDCardDashboardPageObj.clickAssets();
      cy.wait(5000);
    })
  });

  it("Tc_005 verify that Click on the Template menu successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
        


      IDCardDashboardPageObj.clickTemplate();
      cy.wait(5000);
    })
  });

  it("Tc_006 verify that Click on the Generate code menu Successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
      
        
      IDCardDashboardPageObj.clickGenerateCode();
      cy.wait(5000);
    })
  });

  it("Tc_007 verify that click on the Download ID Card menu Successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
      
        
      IDCardDashboardPageObj.clickDownloadIdCard();
      cy.wait(5000);
    })
  });

  it("Tc_008 verify that click on the Id Card Verification menu Successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
      
      
      IDCardDashboardPageObj.clickIdCardVerification();
      cy.wait(5000);
    })
  });

  it("Tc_009 verify that click on the home icon Successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
     
      
      IDCardDashboardPageObj.clickHomeIcon();
      cy.wait(5000);
    })
  });
 

  it("Tc_010 verify that logout from the application Successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const IDCardDashboardPage = Cypress.require('../../pages/IDCardDashboardPage');
      const IDCardDashboardPageObj = new IDCardDashboardPage() ;
     
      
      IDCardDashboardPageObj.logout();
      cy.wait(5000);
    })
  });
 it("Tc_011 verify dashboard loads within acceptable time", () => {
    // Use the imported page object (no Cypress.require). Measure elapsed time
    const dashboard = new IDCardDashboardPage();
    const startTime = Date.now();

    // waitForDashboardLoad contains Cypress commands; use cy.then to compute elapsed time after commands finish
     dashboard.waitForDashboardLoad();
     cy.then(() => {
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      cy.log(`Dashboard load time: ${loadTime} ms`);
      expect(loadTime).to.be.lessThan(3000);
    });
  });
  });





