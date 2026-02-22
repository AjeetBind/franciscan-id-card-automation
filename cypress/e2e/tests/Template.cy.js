/// <reference types="cypress" />
import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import TemplatePage from '../../pages/TemplatePage';
import CreateTemplatePage from '../../pages/CreateTemplatePage';

describe('ID Card Template Test Suite', () => {

  beforeEach(() => {
    cy.login(
      idcardtestData.login.username,
      idcardtestData.login.password
    );
  });
    
 it("TC_001: verify navigate on the Template page successfully and verify all UI elements are visible", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
    const TemplatePage= Cypress.require('../../pages/TemplatePage');
    const TPObj = new TemplatePage();

    // ---- Navigation ----
    TPObj.clickontheTemplatelink();

    // ---- UI Visibility Verifications ----
    TPObj.verifyTemplateTextVisible();
    TPObj.verifySearchBoxVisible();
    TPObj.verifySearchIconVisible();
    TPObj.verifyUserTypeDropdownVisible();
    TPObj.verifyTableHeadersVisible();
    cy.wait(10000);
    TPObj.selectUserType("User Type: Staff");
    TPObj.verifyTemplateTextVisible();
    TPObj.verifySearchBoxVisible();
    TPObj.verifySearchIconVisible();
    TPObj.verifyUserTypeDropdownVisible();
    TPObj.verifyTableHeadersVisible();
  });
});
it("TC_002 : Verify Student template is created and visible on Template page", () => {
  cy.origin(Cypress.env('IDCARD_URL'), () => {
    const TemplatePage= Cypress.require('../../pages/TemplatePage');
    const TPObj = new TemplatePage();
    //=============Create Template ================//
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);
    CreateTemplatePageObj.clickBackgroundsBtn();
    cy.wait(2000);
    CreateTemplatePageObj.clickInsideBackgroundButton();
    cy.wait(2000);
    CreateTemplatePageObj.clickSelectBackground(0);
    cy.wait(2000);
    for (let i = 0; i < 5; i++) {
    CreateTemplatePageObj.addTextButton();
    cy.wait(500);   // wait 0.5 sec
}
    CreateTemplatePageObj.clickShapesBtn();
    cy.wait(2000);
    CreateTemplatePageObj.chooseShapesStar();
    cy.wait(2000);
    CreateTemplatePageObj.clickSaveButton();
    cy.wait(1000);
    const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
    CreateTemplatePageObj.enterTemplateName(uniqueName);
    CreateTemplatePageObj.enterMetaTags("blue");
    CreateTemplatePageObj.clickSaveTemplateButton('success', { wait: 10000 });

    cy.wait(10000);
    //=============== Template Methods ===================//
    CreateTemplatePageObj.clickTemplate();
    cy.wait(5000); 
    TPObj.searchTemplate(uniqueName);
    TPObj.verifyTemplateVisible(uniqueName);
    TPObj.verifyOrientation(uniqueName,'Landscape');
    TPObj.deleteTemplateIfExists(uniqueName);
    TPObj.searchTemplate(uniqueName);


  });
});

   it("TC_003: Verify Staff template is saved successfully and visible on Template page ", () => {
        cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.selectUserType("Staff");
        cy.wait(3000);
       
        cy.wait(3000);
        CreateTemplatePageObj.clickBackgroundsBtn();
        cy.wait(2000);
        CreateTemplatePageObj.clickInsideBackgroundButton();
        cy.wait(2000);
        CreateTemplatePageObj.clickSelectBackground(5);
        cy.wait(2000);
            for (let i = 0; i < 3; i++) {
            CreateTemplatePageObj.addTextButton();
            cy.wait(500); 
          }
            
      CreateTemplatePageObj.clickElementsBtn();
      cy.wait(2000);
      CreateTemplatePageObj.clickAddedByYouElement();
      cy.wait(2000);
      CreateTemplatePageObj.clickSaveButton();
      const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
      CreateTemplatePageObj.enterTemplateName(uniqueName);
      CreateTemplatePageObj.enterMetaTags("Blue");
      CreateTemplatePageObj.clickSaveTemplateButton('success');
      cy.wait(3000);
  //--Verify template is saved name visible in the template  modules and delete
     CreateTemplatePageObj.clickTemplate();
     cy.wait(2000);
     CreateTemplatePageObj.selectUserTypeunderTemplate('User Type: Staff');
     CreateTemplatePageObj.typeInSearchBox(uniqueName);
     CreateTemplatePageObj.verifyFirstSearchResult(uniqueName);
     CreateTemplatePageObj. verifyMetaTagValue("Blue");
     CreateTemplatePageObj.  verifyOrientationLandscape("Landscape");
     CreateTemplatePageObj.clickDeleteIcon();
     CreateTemplatePageObj.typeInSearchBox(uniqueName);
     CreateTemplatePageObj.verifyNoDataAfterDelete(uniqueName)
  

       });
 });
});