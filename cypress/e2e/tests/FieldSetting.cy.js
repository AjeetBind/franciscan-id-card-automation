/// <reference types="cypress" />

import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';

describe('ID Card Field Setting Test Suite', () => {

  beforeEach(() => {
    cy.login(
      idcardtestData.login.username,
      idcardtestData.login.password
    );
  });

  it("TC_001 verify Field Settings page navigation", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      cy.wait(3000);
    });
  });

  it("TC_002 Verify Field Setting UI under Student type", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      fs.verifySearchBoxWithIconVisible();
      fs.verifyUserTypeDropdownAndOptions();
      fs.verifyTableColumnHeadersVisible();
      fs.scrollDown();
      fs.scrollUp();
      fs.verifySaveButtonVisible();
      fs.verifySearchFiltersColumnName("Student_Name", 100);
      cy.wait(3000);
    });
  });

  it("TC_003 Verify duplicate Order By value error (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifySearchFiltersColumnName("Student_Name", 100);
      fs.enterOrderValue("100");
      fs.verifySearchFiltersColumnName("Date_Of_Birth", 100);
      fs.enterOrderValue("100");
      fs.clickontheSaveBtt();
      fs.verifyerrorMessage();
      cy.wait(3000);
    });
  });

  it("TC_004 Verify all date formats visible for Student DOB fields", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();

      const dobFields = [
        'Mother_DOB',
        'Father_DOB',
        'Date_Of_Birth',
        'Date_Of_Anniversary',
        'Date_of_Admission',
        'Student_Joining_Date'
      ];

      dobFields.forEach(field => {
        fs.verifySearchFiltersColumnName(field, 100);
        fs.verifyDateFormatDropdownOptionsVisible();
        cy.wait(3000);
      });
    });
  });

 it("TC_005 Verify date format saved successfully (Student) – easy logic", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {

    const FieldsSetting = Cypress.require('../../pages/FieldSetting');
    const fs = new FieldsSetting();

    fs.clickOnFieldSettingMenu();
    fs.verifyfieldstextname();

    const dobFields = [
      'Mother_DOB',
      'Father_DOB',
      'Date_Of_Birth',
      'Date_Of_Anniversary',
      'Date_of_Admission',
      'Student_Joining_Date'
    ];

    dobFields.forEach((field) => {
    fs.verifySearchFiltersColumnName(field, 100);
      cy.get('select.textBxCus:visible')
        .invoke('val')
        .then((currentValue) => {
          const newValue = currentValue === '1' ? 2 : 1;
          cy.log(`Changing date format from ${currentValue} to ${newValue}`);
          fs.selectDateFormatByValue(newValue);
          fs.clickSaveButton();
          fs.verifySaveSuccessMessage();
          cy.wait(3000);
        });
    });
  });
});


  it("TC_006 Verify checkbox check/uncheck and save (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      fs.scrollDown();
      fs.verifyCheckboxCheckUncheck('input[type="checkbox"]');
      fs.scrollUp();
      fs.clickSaveButton();
      cy.wait(3000);
    });
  });

  it("TC_007 Verify error when selecting more than 15 fields (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      fs.scrollDown();
      fs.verifyMaxFieldSelectionErrorMessage();
      cy.wait(3000);
    });
  });

  it("TC_008 Verify success when selecting 14 & 15 fields (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      fs.verifyBoundaryFieldSelectionSuccess(14);
      fs.verifyBoundaryFieldSelectionSuccess(15);
      cy.wait(3000);
    });
  });

  it("TC_009 Verify 'No changes detected' message (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      cy.wait(2000);
      fs.verifyNoChangesDetectedMessage();
      cy.wait(3000);
    });
  });

  it("TC_010 Verify selected fields appear in Create Template (Student)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.verifyfieldstextname();
      fs.verifyBoundaryFieldSelectionSuccess(15);
      fs.clickCreateTemplate();

      const selectedFields = [
        'Student_Name',
        'Admission_Number',
        'Mother_Aadhaar_Number',
        'Father_Aadhaar_Number'
      
      ];

      selectedFields.forEach(field => {
        fs.verifyFieldInLeftPanel(field);
        cy.wait(3000);
      });
    });
  });

  it("TC_011 Verify Field Setting UI under Staff type", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifyfieldstextname();
      fs.verifySearchBoxWithIconVisible();
      fs.verifyUserTypeDropdownAndOptions();
      fs.verifyTableColumnHeadersVisible();
      fs.scrollDown();
      fs.scrollUp();
      fs.verifySaveButtonVisible();
      fs.verifySearchFiltersColumnName("Staff_Name", 100);
      cy.wait(3000);
    });
  });

  it("TC_012 Verify duplicate Order By value error (Staff)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifySearchFiltersColumnName("Staff_Name", 100);
      fs.enterOrderValue("100");
      fs.verifySearchFiltersColumnName("Photo", 100);
      fs.enterOrderValue("100");
      fs.clickontheSaveBtt();
      fs.verifyerrorMessage();
      cy.wait(3000);
    });
  });

  it("TC_013 Verify all date formats visible for Staff DOB fields", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifyfieldstextname();

      const staffDob = [
        'Staff_DOB',
        'Staff_Joining_Date',
        'Anniversary_Date'
      ];

      staffDob.forEach(field => {
        fs.verifySearchFiltersColumnName(field, 100);
        fs.verifyDateFormatDropdownOptionsVisible();
        cy.wait(3000);
      });
    });
  });

  it("TC_014 Verify date format saved successfully (Staff)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifyfieldstextname();

      const staffDob = [
        'Staff_DOB',
        'Staff_Joining_Date',
        'Anniversary_Date'
      ];

       staffDob.forEach((field) => {
    fs.verifySearchFiltersColumnName(field, 100);
      cy.get('select.textBxCus:visible')
        .invoke('val')
        .then((currentValue) => {
          const newValue = currentValue === '1' ? 2 : 1;
          cy.log(`Changing date format from ${currentValue} to ${newValue}`);
          fs.selectDateFormatByValue(newValue);
          fs.clickSaveButton();
          fs.verifySaveSuccessMessage();
          cy.wait(3000);
        })
        });
    });
  });

  it("TC_015 Verify checkbox check/uncheck and save (Staff)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifyfieldstextname();
      fs.scrollDown();
      fs.verifyCheckboxCheckUncheck('input[type="checkbox"]');
      fs.scrollUp();
      fs.clickSaveButton();
      cy.wait(3000);
    });
  });

  it("TC_016 Verify selected fields appear in Create Template (Staff)", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      const FieldsSetting = Cypress.require('../../pages/FieldSetting');
      const fs = new FieldsSetting();
      fs.clickOnFieldSettingMenu();
      fs.selectUserType("User Type: Staff");
      fs.verifyfieldstextname();
      fs.verifyBoundaryFieldSelectionSuccess(15);
      fs.clickCreateTemplate();
      fs.selectUser('Staff');

      const selectedFields = [
        'Staff_Name',
        'Title',
        'Photo',
        'Father_Or_Husband_Name',
        'Designation',
        'Father_Or_Husband_Mobile',
        'Blood_Group',
        'Current_Address',
        'Staff_Joining_Date',
        'barcode',
        'Address',
        'Qualification',
        'Email',
        'Mobile',
        'Gender'
      ];

      selectedFields.forEach(field => {
        fs.verifyFieldInLeftPanel(field);

      });
       cy.wait(3000);
    });
  });

});
