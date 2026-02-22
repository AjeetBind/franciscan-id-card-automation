/// <reference types="cypress" />
import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import Assets from '../../pages/Assets';

describe('ID Card  Asstes Pages Test Suite', () => {

  beforeEach(() => {
    cy.login(idcardtestData.login.username, idcardtestData.login.password);

  });

  it("TC_001 Verify Assets page navigation and UI elements visibility", () => {
   cy.origin(Cypress.env('IDCARD_URL'), () => {
    const Assets = Cypress.require('../../pages/Assets');
    const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.verifySearchBoxWithIconVisible();
     assetsObj.verifyTableColumnHeadersVisible();
     assetsObj.verifylistViewIconVisible();
     assetsObj. verifygridViewIconvisible();
     assetsObj.verifyUploadAssetsBttvisible();
   
    
  });
  });

  it("TC_002 Verify that if user click on the UploadAssetsButton user navigation on the page and all UI elements should be visible",()=>{
     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     assetsObj.verifyAssetstypeLabelTextVisible();
     assetsObj.verifySelectAssetsDropdownVisible();
     assetsObj.verifyAssetsNameLabelTextVisible();
     assetsObj.verifyMetaTagLabelTextVisible();
     assetsObj.verifyUploadFileLabelTextVisible();
     assetsObj.verifyDragAndDropTextVisible();
     assetsObj.verifyUploadButtonVisible();
    });
  })

  it("TC_003: Verify required fields error messages when user clicks Upload without entering data",
  () => {
     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     assetsObj.clickOnUploadButton();
     // ---- Field-level Validations ----
     assetsObj.verifyAssetTypeRequiredErrorVisible();
     assetsObj.verifyAssetsNameRequiredErrorVisible();
     assetsObj.verifySelectAssetsFileRequiredErrorVisible();
     
    assetsObj.verifyGlobalValidationToastMessageVisible();
    });

  }
);
it("TC_004: Verify user can upload valid Assets type Eelement .jpg file successfully and verify exits and delete",() => {

     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Element');
      assetsObj.verifyAssetsNameLabelTextVisible();
      const randomName = `Element_${Math.floor(Math.random() * 100000)}`;
      assetsObj.enterAssetsName(randomName);
      assetsObj.selectMetaTagsByclick();
      assetsObj.verifyUploadFileLabelTextVisible();
      assetsObj.uploadFile('front_idcard.jpg'); // fixture file
      // ---- Submit ----
      assetsObj.verifyUploadButtonVisible();
      assetsObj.clickOnUploadButton(); 
       cy.wait(10000);    
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj. clickongridViewIcon();
      assetsObj.searchbox(randomName);
      assetsObj.verifyPatternGridVisibleAndHover();
      assetsObj. clickOnthelistViewIcon();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Element');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(2000);
    });

  }
);

it("TC_005: Verify user can upload valid Assets type Pattern .jpg file successfully and verify exits and delete",() => {

     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Pattern');
      assetsObj.verifyAssetsNameLabelTextVisible();
      const randomName = `Pattern_${Math.floor(Math.random() * 100000)}`;
      assetsObj.enterAssetsName(randomName);
      assetsObj.selectMetaTagsByclick();
      assetsObj.verifyUploadFileLabelTextVisible();
      assetsObj.uploadFile('front_idcard.jpg'); // fixture file
      // ---- Submit ----
      assetsObj.verifyUploadButtonVisible();
      assetsObj.clickOnUploadButton();
      cy.wait(10000);     
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj. clickongridViewIcon();
      assetsObj.searchbox(randomName);
      assetsObj.verifyPatternGridVisibleAndHover();
      assetsObj. clickOnthelistViewIcon();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Pattern');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(2000);
    });

  });

  it("TC_006: Verify user can upload valid Assets type Background .jpg file successfully and verify exits and delete",() => {
     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Background');
      assetsObj.verifyAssetsNameLabelTextVisible();
      const randomName = `Background_${Math.floor(Math.random() * 100000)}`;
      assetsObj.enterAssetsName(randomName);
      assetsObj.selectMetaTagsByclick();
      assetsObj.verifyUploadFileLabelTextVisible();
      assetsObj.uploadFile('front_idcard.jpg'); // fixture file
      // ---- Submit ----
      assetsObj.verifyUploadButtonVisible();
      assetsObj.clickOnUploadButton(); 
      cy.wait(10000);    
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj. clickongridViewIcon();
      assetsObj.searchbox(randomName);
      assetsObj.verifyPatternGridVisibleAndHover();
      assetsObj. clickOnthelistViewIcon();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Background');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(2000);
    });

  });


   it('TC_007:Verify when user uploads Asstes types invalid type then System should be show error message that only .jps and .png file',()=>{
      cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Background');
      assetsObj.verifyAssetsNameLabelTextVisible();
      const randomName = `Background_${Math.floor(Math.random() * 100000)}`;
      assetsObj.enterAssetsName(randomName);
      assetsObj.selectMetaTagsByclick();
      assetsObj.verifyUploadFileLabelTextVisible();
      assetsObj.uploadFile('Pattern3.webp'); // fixture file
      // ---- Submit ----
      assetsObj.verifyUploadButtonVisible();
      assetsObj.clickOnUploadButton(); 
      assetsObj.verifyInvalidFileToastMessage();
     
    });
  });
  it("TC_008: Verify duplicate asstes background name validation and verify already name exits", () => {

   cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Background');
      assetsObj.verifyAssetsNameLabelTextVisible();
     const randomName = `Background_${Date.now()}`;

     for (let i = 0; i < 2; i++) {
     assetsObj.enterAssetsName(randomName);
     assetsObj.uploadFile('front_idcard.jpg');
     assetsObj.selectMetaTagsByclick();
     assetsObj.clickOnUploadButton();

     cy.wait(10000);
  
}
  
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Background');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(5000);
 });
  });
      
   it("TC_009: Verify duplicate asstes Pattern name validation and verify already name exits", () => {

    cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Pattern');
      assetsObj.verifyAssetsNameLabelTextVisible();
     const randomName = `Pattern_${Date.now()}`;

     for (let i = 0; i < 2; i++) {
     assetsObj.enterAssetsName(randomName);
     assetsObj.uploadFile('front_idcard.jpg');
     assetsObj.selectMetaTagsByclick();
     assetsObj.clickOnUploadButton();
    cy.wait(5000);
}
    
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Pattern');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(5000);
 });
  });

   it("TC_010: Verify duplicate asstes Element name validation and verify already name exits", () => {

    cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
     cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Element');
      assetsObj.verifyAssetsNameLabelTextVisible();
     const randomName = `Element_${Date.now()}`;

     for (let i = 0; i < 2; i++) {
     assetsObj.enterAssetsName(randomName);
     assetsObj.uploadFile('front_idcard.jpg');
     assetsObj.selectMetaTagsByclick();
     assetsObj.clickOnUploadButton();
    cy.wait(5000);
}
 
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Element');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(2000);
 });
  });

  it('TC_011: Verify assets saved and reflected in Create Template, then delete', () => {
     cy.origin(Cypress.env('IDCARD_URL'), () => {
     const Assets = Cypress.require('../../pages/Assets');
     const  assetsObj = new Assets() ; 
     assetsObj .clickOnAssetsLink();
     assetsObj.clickOnUploadAssetsButton();
      cy.wait(2000);
     // ---- Fill Mandatory Fields ----
      assetsObj.verifySelectAssetsDropdownVisible();
      assetsObj.selectAssetstype('Pattern');
      assetsObj.verifyAssetsNameLabelTextVisible();
      const randomName = `Pattern_${Math.floor(Math.random() * 999)}`;
      assetsObj.enterAssetsName(randomName);
      assetsObj.selectMetaTagsByclick();
      assetsObj.verifyUploadFileLabelTextVisible();
      assetsObj.uploadFile('front_idcard.jpg'); // fixture file
      // ---- Submit ----
      assetsObj.verifyUploadButtonVisible();
      assetsObj.clickOnUploadButton(); 
      cy.wait(10000);  
      assetsObj.clickCreateTemplate();
      cy.wait(2000);
      assetsObj.clickBackgroundsBtn();
      assetsObj.verifySearchBox(randomName);
      //------ verify exits and delete -------//
      assetsObj .clickOnAssetsLink();
      cy.wait(2000);
      assetsObj.verifySearchFilterByAssetName(randomName);
      assetsObj.verifyAssetNameInGrid(randomName);
      assetsObj.verifyAssetTypeInGrid('Pattern');   
      assetsObj.verifyMetaTagInGrid('Blue');
      assetsObj.verifyAddedDateInGrid();
      assetsObj.clickOnDeleteIcon();
      assetsObj.verifySearchFilterByAssetName(randomName); 
      cy.wait(2000);


 }) });

 it('TC_012: Verify duplicate meta tag selection shows confirmation message', () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
    const Assets = Cypress.require('../../pages/Assets');
    const assetsObj = new Assets();
    assetsObj.clickOnAssetsLink();
    assetsObj.clickOnUploadAssetsButton();
    cy.wait(2000);
    assetsObj.selectMetaTagsByclick();
    assetsObj.selectMetaTagsByclick();
    assetsObj.verifyDuplicateMetaTagMessage("Blue");
  });
});


});


