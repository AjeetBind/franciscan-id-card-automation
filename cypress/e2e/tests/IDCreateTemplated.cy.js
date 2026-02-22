/// <reference types="cypress" />
import '../../support/commands';
import idcardtestData from '../../fixtures/idcardtestData.json';
import CreateTemplatePage from '../../pages/CreateTemplatePage';
  
describe('IDCreateTemplated Suite', () => {

  beforeEach(() => {
    cy.login(idcardtestData.login.username, idcardtestData.login.password);
  });

  it.only("TC_001 verify that click on the create template menu successfully", () => {
         cy.origin(Cypress.env('IDCARD_URL'), () => { 
          const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
          const CreateTemplatePageObj = new CreateTemplatePage() ;
        
          CreateTemplatePageObj.clickCreateTemplate();
          cy.wait(3000);
         });
  });
    


 it.only("TC_002 verify that select id card type from dropdown successfully", () => {
       cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.selectUserType("Staff");
        cy.wait(3000);
        CreateTemplatePageObj.selectIdCardTypeByValue('2')
        cy.wait(3000);
        CreateTemplatePageObj.selectIdCardTypeByValue('1');
       cy.wait(3000);

       CreateTemplatePageObj.clickOrientationPortraitThenLandscape();
       });
 });

 it.only("TC_003 verify that click on the portrait and landscape Successfully", () => { 
       cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ;
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.clickOrientationPortraitThenLandscape();
       });
  });
it.only("TC_004 verify that when user click on the bottom all button one it shoud be click Successfully", () => { 
       cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ;
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.clickBottomTools();
  } );  

});
 
 it.only("TC_005 verify bottom buttons using for loop (visible, hover, tooltip, click)", () => {

  cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);

  // all buttons have same selector
  const selector = ".mat-mdc-tooltip-trigger";
  cy.get(selector).then($btns => {
  const totalButtons = $btns.length;
  for (let i = 0; i < totalButtons; i++) {
   // skip 4th button (index 3)
    if (i === 3) {
      cy.log("Skipping button index 3");
      continue;
    }
    cy.get(selector)
      .eq(i)
      .should('be.visible')
      .trigger('mouseover');
       cy.wait(300);
       cy.get(selector)
      .eq(i)
      .click();
      cy.wait(300);
  }

});

  });
 });
it.only("TC_006 verify that when user try to save to balnk Templated then System show error message", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);
    CreateTemplatePageObj.clickSaveButton();
    CreateTemplatePageObj.enterTemplateName("ashjg");
    CreateTemplatePageObj.enterMetaTags("blue");
    CreateTemplatePageObj.clickSaveTemplateButton('success');
    CreateTemplatePageObj.clickCancelButton();
  });
});

it.only("TC_007 verify that when user select fileds and  add  any text then click on the save template button successfully", () => {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);  

   CreateTemplatePageObj.searchstudentdeatils("Personal Details");
    cy.wait(2000);
   
   // CreateTemplatePageObj.dragFieldToCanvas("Date_Of_Birth");
    CreateTemplatePageObj.clickBackgroundsBtn();
    CreateTemplatePageObj.clickInsideBackgroundButton();
    CreateTemplatePageObj.clickSelectBackground(0);
    cy.wait(2000);
    
    for (let i = 0; i < 5; i++) {
    CreateTemplatePageObj.addTextButton();
    cy.wait(500);   // wait 0.5 sec
}

    //----------- enter template name and meta tags ---------- //
    cy.wait(2000);
    CreateTemplatePageObj.clickElementsBtn();
    cy.wait(2000);
    CreateTemplatePageObj.searchElement("logo");
    cy.wait(5000);
    CreateTemplatePageObj.selectElement();
    cy.wait(5000);
    CreateTemplatePageObj.clickShapesBtn();
     cy.wait(2000);
    CreateTemplatePageObj.chooseShapesStar();
     cy.wait(2000);
    CreateTemplatePageObj.clickShapesBtn();
     cy.wait(2000);
    CreateTemplatePageObj.chooseShapescircle();
    cy.wait(5000);
    CreateTemplatePageObj.clickZoomInBtn();
     cy.wait(2000);
    CreateTemplatePageObj.clickZoomOutBtn();
     cy.wait(2000);
    CreateTemplatePageObj.clickDeleteBtn();
    cy.wait(5000);
    CreateTemplatePageObj.clickUndoBtn();
    cy.wait(5000);
    CreateTemplatePageObj.clickRedoBtn();
   
     for (let i = 0; i < 3; i++) {
      CreateTemplatePageObj.clickUndoBtn();
     cy.wait(500);   // wait 0.5 sec
}
   
     CreateTemplatePageObj.clickSaveButton();
     const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
     CreateTemplatePageObj.enterTemplateName(uniqueName);
     CreateTemplatePageObj.enterMetaTags("blue"); 
     CreateTemplatePageObj.clickSaveTemplateButton('success',{wait:10000});
     cy.wait(3000);

     //--Verify template is saved name visible in the template  modules and delete
   CreateTemplatePageObj.clickTemplate();
   cy.wait(2000);
   CreateTemplatePageObj.typeInSearchBox(uniqueName);
   cy.wait(2000);
   CreateTemplatePageObj.verifyFirstSearchResult(uniqueName);
   cy.wait(2000);
   CreateTemplatePageObj. verifyMetaTagValue("Blue");
   CreateTemplatePageObj.  verifyOrientationLandscape("Landscape");
   CreateTemplatePageObj.clickDeleteIcon();
   CreateTemplatePageObj.typeInSearchBox(uniqueName);
   CreateTemplatePageObj.verifyNoDataAfterDelete(uniqueName)

  });
    });

    it.only("TC_008: Verify Text Properties are working properly ", () => {
     cy.origin(Cypress.env('IDCARD_URL'), () => {

 
     const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
     const CreateTemplatePageObj = new CreateTemplatePage();
     CreateTemplatePageObj.clickCreateTemplate();
     cy.wait(2000);  
     CreateTemplatePageObj.clickCreateTemplate();
     cy.wait(2000);  
     CreateTemplatePageObj.addTextButton();
     CreateTemplatePageObj.addTextButton();
     CreateTemplatePageObj.addTextButton();
     cy.wait(10000);
     CreateTemplatePageObj.verifyPanelOpened();
  // 3) Change rotation, order, opacity
    CreateTemplatePageObj.setRotation(45);
    CreateTemplatePageObj.clickFlipX();
    CreateTemplatePageObj.clickBringToFront();
    CreateTemplatePageObj.setOpacity(70);
  // 4) Typography: font, size, align, styles
    CreateTemplatePageObj.loopAllFonts();
    cy.wait(1000);
    CreateTemplatePageObj.loopAllFontStyles();
    cy.wait(1000);
    CreateTemplatePageObj.setFontSize(28);
    CreateTemplatePageObj.alignCenter();
    CreateTemplatePageObj.toggleUnderline();

  // 5) Text color
   CreateTemplatePageObj.setTextColor("ff0000", 100);
   

   });
  });

  it.only("TC_009: Verify Shapes popup opens, Close button is visible, and selected shape reflects in the working area with title “Shapes ", () => {

    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);  
    CreateTemplatePageObj.clickShapesBtn();
    cy.wait(2000);
    CreateTemplatePageObj.textnameonshape();
    CreateTemplatePageObj.colsebttn();
    CreateTemplatePageObj.clickShapesBtn();
    CreateTemplatePageObj.chooseShapesStar();
    CreateTemplatePageObj.clickShapesBtn();
    CreateTemplatePageObj.chooseShapescircle();
   

    });
});
 it.only("TC_010: Verify Shapes properties (Flip X, Flip Y, Bring to Front, Send to Back, Opacity, Shape Color, Border Color) are visible and working properly. ", () => {

    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);  
    CreateTemplatePageObj.clickShapesBtn();
    cy.wait(2000);
    CreateTemplatePageObj.textnameonshape();
    CreateTemplatePageObj.colsebttn();
    CreateTemplatePageObj.clickShapesBtn();

    CreateTemplatePageObj.chooseShapesStar();
     cy.wait(2000);
    CreateTemplatePageObj.verifyShapesPanelOpened();
    CreateTemplatePageObj.rotationInputshapes();
    CreateTemplatePageObj.fiplXshape();
    CreateTemplatePageObj.flipYshapes();
    CreateTemplatePageObj.verifytextVisibility();
    CreateTemplatePageObj.verifybringtofrontbtt();
    CreateTemplatePageObj. verifysendtobackbtt();
    CreateTemplatePageObj.verifytextopacity();
    CreateTemplatePageObj.verifydeufaultopacityvalue();
    CreateTemplatePageObj.verifyIncaseopacityvalue();
    CreateTemplatePageObj.verifyShapecolorTextvisible();
    CreateTemplatePageObj.verifyHexcolorinputvisible();
    CreateTemplatePageObj.VerifyValidatePercentinputvisible();
    CreateTemplatePageObj.verifiycolorinputvalue("800000");
    CreateTemplatePageObj.entervalueinborderpxinput(10);
    CreateTemplatePageObj.enterBorderColorValue('00FF00');
  });
});
it(' TC_011:verify that clicking Background opens panel with Search, Close, Upload, Pattern, User and System backgrounds', () => {
cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);  
    CreateTemplatePageObj.clickBackgroundsBtn();  
    CreateTemplatePageObj.verifybackgroundtextvisible(); 
    CreateTemplatePageObj.verifyclosebutton(); 
    CreateTemplatePageObj.verifyuploadbackgroundBtt();
    CreateTemplatePageObj.verifysearchbox("pattern");
    CreateTemplatePageObj.verifyAddedyouTextvisible();
    CreateTemplatePageObj.verifysystempattern();
    CreateTemplatePageObj.verifypatternbtt();
                        
});
});

it('TC_012:Verify that when user clicks the Background button, the right-side Background panel appears and all related properties (Flip Y, Flip X, Opacity, Background Color, Delete Background) are visible and working.',()=>{
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    cy.wait(2000);  
    CreateTemplatePageObj.clickBackgroundsBtn();
    CreateTemplatePageObj.clickSelectBackground(0);
    CreateTemplatePageObj.clickBackgroundsBtn();
    CreateTemplatePageObj.backgroundheadingtext();
    cy.wait(2000);
    CreateTemplatePageObj.verifyFlipx();
    CreateTemplatePageObj.verifyFlipx();
    CreateTemplatePageObj.verifyFlipx();
    cy.wait(2000);
     CreateTemplatePageObj.verifyFlipy();
     CreateTemplatePageObj.verifyFlipy();
     CreateTemplatePageObj.verifyOpacitytextvisible();
     CreateTemplatePageObj. verifydefaultdisplayedvalue();
     CreateTemplatePageObj.verifyIncreaseopacity();
     CreateTemplatePageObj.verifydecreaseopacity();
     CreateTemplatePageObj.verifyBackgroundColorheadingvisible();
     CreateTemplatePageObj. Verifydefaulthexinputexistsandisvisible();
     CreateTemplatePageObj.verifydefaultpercentageinputexistsandivisible();
     CreateTemplatePageObj.Entercolorcode("FF0000");
     CreateTemplatePageObj.EnterOpacity(50);
     CreateTemplatePageObj.verifyactiontext();
     CreateTemplatePageObj.verifydeletebtt();
     CreateTemplatePageObj.verifydeletebutton();
     });
  })

  it("TC_013:Verify that clicking the Element button opens the popup, all element options are visible and working, hover shows element name, and selected element reflects in the working area.",()=>{
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    CreateTemplatePageObj.clickElementsBtn();
    CreateTemplatePageObj. verifyPopupVisible();
    CreateTemplatePageObj.verifyHeaderText();
    CreateTemplatePageObj.verifyCloseButtonVisible();
    cy.wait(2000);
    CreateTemplatePageObj.verifySearchBox();
    CreateTemplatePageObj.verifyAddedByYouText();
    CreateTemplatePageObj. verifySystemElementsText();
    CreateTemplatePageObj. verifyScrollableArea();
    CreateTemplatePageObj.  verifyImagesInGrid();
    CreateTemplatePageObj. hoverAllElements();
   
    CreateTemplatePageObj.clickAddedByYouElement();

    CreateTemplatePageObj.clickSystemElement();
 

  });
  });

  it('TC_014: Verify that when user updates a template, then a popup appears with Save, Update, and Cancel buttons visible and clickable, and after clicking Update a success message should be displayed. ',()=>{
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    CreateTemplatePageObj.buttomTemplateBtt()
    cy.wait(3000);
    CreateTemplatePageObj.selectTemplate(0)
     cy.wait(3000);
     CreateTemplatePageObj.buttomTemplateBtt()
     cy.wait(3000);
     CreateTemplatePageObj.selectTemplate(0)
     CreateTemplatePageObj.addTextButton();
     CreateTemplatePageObj.clickSaveButton();
     CreateTemplatePageObj.verifyUpdateButton();
     cy.wait(2000);
     CreateTemplatePageObj.clickCancelButton();
     cy.wait(2000);
     CreateTemplatePageObj.clickUpdateButton();
      });
  })
  it('TC_015: Verify all headings are visible ',()=>{
    cy.origin(Cypress.env('IDCARD_URL'), () => {
    const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
    const CreateTemplatePageObj = new CreateTemplatePage();
    CreateTemplatePageObj.clickCreateTemplate();
    CreateTemplatePageObj.verifyAllHeadingsVisible();
      });
  })

   it("TC_016: Verify Staff type Templated saved Successfully  ", () => {
       cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.selectUserType("Staff");
        cy.wait(3000);
       
        cy.wait(3000);
        CreateTemplatePageObj.clickBackgroundsBtn();
        CreateTemplatePageObj.clickInsideBackgroundButton();
        CreateTemplatePageObj.clickSelectBackground(5);

            for (let i = 0; i < 3; i++) {
            CreateTemplatePageObj.addTextButton();
            cy.wait(500); 
          }
            
     CreateTemplatePageObj.clickElementsBtn();
     CreateTemplatePageObj.clickAddedByYouElement();
     CreateTemplatePageObj.clickSaveButton();
      const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
     CreateTemplatePageObj.enterTemplateName(uniqueName);
     CreateTemplatePageObj.enterMetaTags("Blue");
     CreateTemplatePageObj.clickSaveTemplateButton('success',{wait:10000});
     cy.wait(3000);
 //--Verify template is saved name visible in the template  modules and delete
  CreateTemplatePageObj.clickTemplate();
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

 it("TC_017 Verify that  staff save Templated Upfated successfully ",()=>{

      cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
        cy.wait(3000);
        CreateTemplatePageObj.selectUserType("Staff");
        cy.wait(3000);
        CreateTemplatePageObj.buttomTemplateBtt();
       cy.wait(3000);
       CreateTemplatePageObj.selectTemplate(0);
       cy.wait(3000);
      CreateTemplatePageObj.clickonlnadscpes();
       CreateTemplatePageObj.addTextButton();
      CreateTemplatePageObj.clickSaveButton();
       CreateTemplatePageObj.verifyUpdateButton();
       cy.wait(2000);
       CreateTemplatePageObj.clickCancelButton();
      cy.wait(2000);
      CreateTemplatePageObj.clickUpdateButton();
     
    
        

       });      
 })

 it("TC_018 :Verify that when user opens the Academic Year dropdown, then all Academic Years should be visible and selectable successfully.  ",()=>{

    cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
      
        CreateTemplatePageObj.selectAcademicYearByValue("2026-2027");
        // verifyAll Academic years are visible 
        const expectedYears = [
          '2017-2018',
          '2018-2019',
          '2019-2020',
          '2020-2021',
          '2021-2022',
          '2022-2023',
          '2023-2024',
          '2024-2025',
          '2025-2026',
          '2026-2027'
];
      CreateTemplatePageObj.verifyAllAcademicYearsVisible(expectedYears);

 //    verify Academic years select one bye one 
     CreateTemplatePageObj. selectAcademicYearsOneByOne();

});        
 });
   it("TC_019 :Verify that when user save a double-side template for Student type in Portrait and Landscape orientation, then the template should be update successfully.",()=>{
       cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
       
        cy.wait(3000);
        CreateTemplatePageObj.clickProtraitbtt();
        cy.wait(2000);
        CreateTemplatePageObj.selectIdCardTypeByValue('2')
        cy.wait(2000);
        CreateTemplatePageObj.addTextButton();
        CreateTemplatePageObj.clickShapesBtn();
        CreateTemplatePageObj.chooseShapesStar();
        CreateTemplatePageObj.clickShapesBtn();
        CreateTemplatePageObj.chooseShapescircle();
        CreateTemplatePageObj.verifybacksideicon();
        CreateTemplatePageObj.clickontheBackidcardicon();
        for (let i = 0; i < 3; i++) {
        CreateTemplatePageObj.addTextButton();
        cy.wait(500); 
          }
        CreateTemplatePageObj.clickElementsBtn();
        CreateTemplatePageObj.clickAddedByYouElement();
        cy.wait(2000);
        CreateTemplatePageObj.verifyforntsideICard();
        CreateTemplatePageObj. clickonfronsideIcard();
       CreateTemplatePageObj.clickSaveButton();
       const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
       CreateTemplatePageObj.enterTemplateName(uniqueName);
       CreateTemplatePageObj.enterMetaTags("Blue");
      CreateTemplatePageObj.clickSaveTemplateButton('success');
      cy.wait(3000);
      CreateTemplatePageObj.buttomTemplateBtt()
      cy.wait(2000);
     CreateTemplatePageObj.selectTemplateByName(uniqueName)

      //--Verify template is saved name visible in the template  modules and delete
  CreateTemplatePageObj.clickTemplate();
  CreateTemplatePageObj.selectUserTypeunderTemplate('User Type: Student');
  CreateTemplatePageObj.typeInSearchBox(uniqueName);
  CreateTemplatePageObj.verifyFirstSearchResult(uniqueName);

  CreateTemplatePageObj. verifyMetaTagValue("Blue");
  CreateTemplatePageObj.  verifyOrientationLandscape("Portrait");
   CreateTemplatePageObj.clickDeleteIcon();
   CreateTemplatePageObj.typeInSearchBox(uniqueName);
   CreateTemplatePageObj.verifyNoDataAfterDelete(uniqueName)
    
      })
   })




    it("TC_020 :Verify that when user save a double-side template for Staff type in Portrait and Landscape orientation, then the template should be update successfully.",()=>{
        cy.origin(Cypress.env('IDCARD_URL'), () => { 
        const CreateTemplatePage = Cypress.require('../../pages/CreateTemplatePage');
        const CreateTemplatePageObj = new CreateTemplatePage() ; 
        CreateTemplatePageObj.clickCreateTemplate();
        CreateTemplatePageObj.selectUserType("Staff");
        cy.wait(3000);
        CreateTemplatePageObj.clickontlandscapebtt();
        cy.wait(2000);
        CreateTemplatePageObj.selectIdCardTypeByValue('2')
        cy.wait(2000);
        CreateTemplatePageObj.addTextButton();
        CreateTemplatePageObj.clickShapesBtn();
        CreateTemplatePageObj.chooseShapesStar();
        CreateTemplatePageObj.clickShapesBtn();
        CreateTemplatePageObj.chooseShapescircle();
        CreateTemplatePageObj.verifybacksideicon();
        CreateTemplatePageObj.clickontheBackidcardicon();
        for (let i = 0; i < 3; i++) {
        CreateTemplatePageObj.addTextButton();
        cy.wait(500); 
          }
        CreateTemplatePageObj.clickElementsBtn();
        CreateTemplatePageObj.clickAddedByYouElement();
        cy.wait(2000);
        CreateTemplatePageObj.verifyforntsideICard();
        CreateTemplatePageObj. clickonfronsideIcard();
       CreateTemplatePageObj.clickSaveButton();
       const uniqueName = `Test_${Cypress._.random(10000, 99999)}`;
       CreateTemplatePageObj.enterTemplateName(uniqueName);
       CreateTemplatePageObj.enterMetaTags("Blue");
       CreateTemplatePageObj.clickSaveTemplateButton('success',{wait:10000});
       cy.wait(3000);
       CreateTemplatePageObj.buttomTemplateBtt()
       cy.wait(2000);
       CreateTemplatePageObj.selectTemplateByName(uniqueName)

  //--Verify template is saved name visible in the template  modules and delete
  CreateTemplatePageObj.clickTemplate();
  CreateTemplatePageObj.selectUserTypeunderTemplate('User Type: Staff');
  CreateTemplatePageObj.typeInSearchBox(uniqueName);
  CreateTemplatePageObj.verifyFirstSearchResult(uniqueName);

   CreateTemplatePageObj. verifyMetaTagValue("Blue");
   CreateTemplatePageObj.  verifyOrientationLandscape("Landscape");
   CreateTemplatePageObj.clickDeleteIcon();
   CreateTemplatePageObj.typeInSearchBox(uniqueName);
   CreateTemplatePageObj.verifyNoDataAfterDelete(uniqueName)
    
      })
   })
});



