 /// <reference types="cypress" />
import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import GenerateBarcode from '../../pages/GenerateBarcode';
 
describe('ID Card Template Test Suite', () => {

  beforeEach(() => {
    cy.login(
      idcardtestData.login.username,
      idcardtestData.login.password
    );
  });
 it.only("TC_001 verify that Click on the Generate code menu Successfully and verify UI Element visible", () => {
      cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      GBObj.verifyheaderText();
      GBObj.verifyAcademicYearLabelVisible();
      GBObj.verifyAcademicYearDropdownVisible();
      GBObj.verifyUserTypeDropdownVisible();
      GBObj.verifyClassDropdownVisible();
      GBObj.verifyGenerateButtonVisible()
     
    })
  });
  it("TC_002:verify that Generate Barcode useing the user type  student shoud be Generate successfully", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);

      //------- Data Used ------------//
      const academicYear = "2026-2027";
      const className="2-B";
      const verifyMessage="Record has been saved successfully";
          
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      cy.wait(2000);
      GBObj.clickClassDropdown();
      cy.wait(2000);
      GBObj.selectAllClasses();
      cy.wait(2000);
      GBObj.deselectAllClasses();
      GBObj.searchClass(className);
      cy.wait(2000);
      GBObj.selectClass(className);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      GBObj. verifySuccessToastMessage(verifyMessage);

  });
});

it("TC_003:verify that Generate Barcode useing the user type  student with select all classes shoud be Generate successfully", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);

      //------- Data Used ------------//
      const academicYear = "2025-2026";
      const verifyMessage="Record has been saved successfully";     
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      cy.wait(2000);
      GBObj.clickClassDropdown();
      cy.wait(2000);
      GBObj.selectAllClasses();
      cy.wait(2000);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      cy.wait(10000);
      GBObj. verifySuccessToastMessage(verifyMessage);

  });
});

it("TC_004:verify that Generate Barcode withouts selecting classes verify error message", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);

      //------- Data Used ------------//
      const academicYear = "2025-2026";
      const verifyerrorMessage="Class is required";     
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      GBObj.verifyRequiredFieldError(verifyerrorMessage);


  });
});
 it("TC_005:verify that Generate Barcode useing the user type  Staff shoud be Generate successfully", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);

      //------- Data Used ------------//
      const academicYear = "2026-2027";
      const  usertype="Staff";
      const selectuserType="TEACHER";
      const verifyMessage="Record has been saved successfully";  
          
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      cy.wait(2000);
      GBObj.selectUserType(usertype);
      cy.wait(2000);
      GBObj.verifyStaffTypeLabel();
      GBObj.clickStaffTypeDropdown();
      GBObj.searchStafftype(selectuserType);
      cy.wait(2000);
      GBObj.selectAllStaff();
      cy.wait(2000);
      GBObj.deselectAllStaff();
      GBObj.selectStafftype(selectuserType);
      cy.wait(2000);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      cy.wait(5000);
      GBObj.verifySuccessToastMessage(verifyMessage);

  });
});
 it("TC_006:verify that Generate Barcode useing the user type  Staff with all sttaff type shoud be Generate successfully", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);

      //------- Data Used ------------//
      const academicYear = "2026-2027";
      const  usertype="Staff";
      const verifyMessage="Record has been saved successfully";  
          
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      cy.wait(2000);
      GBObj.selectUserType(usertype);
      cy.wait(2000);
      GBObj.verifyStaffTypeLabel();
      GBObj.clickStaffTypeDropdown();
      cy.wait(2000);
      GBObj.selectAllStaff();
      cy.wait(2000);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      cy.wait(5000);
      GBObj.verifySuccessToastMessage(verifyMessage);

  });
});



it("TC_007:verify that Generate Barcode useing without selecting staff type and verify error message", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);
      //------- Data Used ------------//
      const academicYear = "2026-2027";
      const  usertype="Staff";
      const verifyerrorMessage="Staff Type is required";  
     
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      cy.wait(2000);
      GBObj.selectUserType(usertype);
      cy.wait(2000);
      GBObj.verifyStaffTypeLabel();
      GBObj.clickStaffTypeDropdown();
      cy.wait(2000);
      GBObj.verifyGenerateButtonVisible();
      GBObj.clickGenerateButton();
      cy.wait(5000);
      GBObj.verifyRequiredFieldError(verifyerrorMessage);

  });
});

it("TC_008:verify when user search Stafftype Invalid then 'No Data Found ' ", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
      const  GenerateBarcode = Cypress.require('../../pages/GenerateBarcode');
      const GBObj = new  GenerateBarcode() ;  
      GBObj.clickGenerateCode();
      cy.wait(2000);
      //------- Data Used ------------//
      const academicYear = "2026-2027";
      const  usertype="Staff";
      const verifyerrorMessage="No data found";
      const searchKeyword="jhfsdjhf";
     
      GBObj. clickAcademicYearDropdown();
      cy.wait(2000);
      GBObj. selectAcademicYearFromOverlay(academicYear);
      //---------Staff type ------------//
      GBObj.selectUserType(usertype);
      cy.wait(2000);
      GBObj.verifyStaffTypeLabel();
      GBObj.clickStaffTypeDropdown();
      GBObj.searchStafftype(searchKeyword);
      cy.wait(2000);
      GBObj.verifyNodatafound();
      GBObj.verifyGenerateButtonVisible();   
   
  });
});
});