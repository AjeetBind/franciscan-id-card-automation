 /// <reference types="cypress" />
import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import Download_IDCard from '../../pages/Download_IDCard';
 
describe('ID Card Download ID Card Test Suite', () => {

  beforeEach(() => {
    cy.login(
      idcardtestData.login.username,
      idcardtestData.login.password
    );
  });
 it("TC_001 verify that Click on the Download_ID Card menu Successfully and verify UI Element visible", () => {
      cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  Download_IDCard = Cypress.require('../../pages/Download_IDCard');
      const downloadIdObj = new  Download_IDCard() ;  
      downloadIdObj.clickOndownloadIdcard();
      downloadIdObj.verifyheaderTextvisible();
      downloadIdObj.verifyAcademicYearLabelVisible();
      downloadIdObj.verifyAcademicYearDropdownVisible();
      downloadIdObj.verifyUserTypeDropdownVisible();
      downloadIdObj.verifyUserTypeDropdownVisible();
      cy.wait(2000);
      downloadIdObj.selectAcademicYearByValue('2025-2026');
      downloadIdObj. selectUserType("Student");
      downloadIdObj.clickClassDropdown();
      downloadIdObj.searchClass("7-C");
      downloadIdObj.selectClass("7-C"); 
      downloadIdObj.verifySelectTemplateLabelVisible();
      cy.wait(2000);
      downloadIdObj.clickSelectTemplateDropdown();
      downloadIdObj.searchTemplateName("Landscapes Template");
      cy.wait(2000);
      downloadIdObj.selectTemplatebyName("Landscapes Template");
      downloadIdObj.verifyGenerateButtonVisible();
      cy.wait(2000);
      downloadIdObj.clickGenerateButton();
      cy.wait(10000);
      downloadIdObj.verifyDownloadButtonVisible();
      cy.wait(5000);
      downloadIdObj.selectPaperSize("A4 (5x2)");
      cy.wait(2000);
      downloadIdObj.changeModeByName("Student Wise");
      downloadIdObj.verifyStudentNameLabel();
      
  
    })
  });



});