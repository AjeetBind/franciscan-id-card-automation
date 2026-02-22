class CreateTemplatePage {

  // ----------- Weblocators ------------- //
  weblocators = {
    createTemplateLink: "Create template",
    userTypeDropdown: "select.panel-select.mt-1.ng-untouched.ng-pristine.ng-valid",
    idCardTypeDropdown: "#RightBox select.panel-select",
    portraitIcon: "img[src='images/NewIcon/Portrait.svg']",
    landscapeIcon: "img[src='images/NewIcon/Landscape.svg']",
    textBtn: "img[src='images/NewIcon/Text.svg']",
    templateBtn: "img[src='images/NewIcon/Template.svg']",
    shapesBtn: "img[src='images/NewIcon/Shapes.svg']",
    backgroundsBtn: "img[src='images/NewIcon/Backgrounds.svg']",
    elementsBtn: "img[src='images/NewIcon/Elements.svg']",
    saveBtn: "button[mattooltip='Save']",   
     templatePopupTitleText: "Template",                     
     templateNameInput: "#mat-input-0",    
     metaTagsInput: "#mat-mdc-chip-list-input-0", 
     clickMetaTagsInput: "#mat-option-2", 
     savetemplateBtn: 'Save Template',
     errormeassage:'div.toast-message',
     sucessfullymessage:"div[role='alert'][aria-label='Record has been saved successfully.!']",
     cancelbutton:'Cancel',
     searchboxinput:".search-box input[placeholder='Search...']",
     studentName: " Date_Of_Birth ",
     backgroundbottombtn:"img[src='images/NewIcon/Backgrounds.svg']",
     insidebackgroundbutton:"Background",
     
     addText:"img[src='images/NewIcon/Text.svg']",
     //---elements button locators----//
     elementsBtn:"img[src='images/NewIcon/Elements.svg']",
     searchbox:"div[class='search-box2 mt-3'] input[placeholder='Search...']",
     selectelement:"img[src='https://s3-noi.aces3.ai/franciscan/SchImg/DEMOIN/IDCard/UploadFileRepository/E5fb43409-4c65-4ac0-aad4-e05dd9bd788e.png']",
   
   
     //---Shapes button locators----//
      shapesBtn:"img[src='images/NewIcon/Shapes.svg']",
      chooseShapesStar:"img[src='images/Shapes/5-PointedStar.svg']",
      chooseShapescircle:"img[src='images/Shapes/Circle.svg']",
      textnameonshape:"Shapes",
      colsebttn:"img[src*='Cross.svg']",

      //----------- shapes textproperties locators---------// 
      textpropertiespanel:"#RightBox .ShapesPrperties .right_heading",

      //---Delete button locators----//
      deleteBtn:"img[src='images/NewIcon/Delete.svg']",
      //---Undo&Redo button locators----//
      undoBtn:"img[src='images/NewIcon/Undo.svg']",
      redoBtn:"img[src='images/NewIcon/Redo.svg']",
      //---Zoom In&Out button locators----//
      zoomInBtn:"img[src='images/NewIcon/ZoomIn.svg']",
      zoomOutBtn:"img[src='images/NewIcon/ZoomOut.svg']",

      //-----Text Properties locators-------//  
     panel: "#RightBox .TextPrperties",

    header: "#RightBox .TextPrperties .right_heading",          // "Text Properties"
    rotationInput: "#RightBox input.degree",

    flipX: "#RightBox img[src='images/NewIcon/FlipX.svg']",
    flipY: "#RightBox img[src='images/NewIcon/FlipY.svg']",

    bringToFront: "#RightBox img[src='images/NewIcon/BringtoFront.svg']",
    sendToBack: "#RightBox img[src='images/NewIcon/SenttoBack.svg']",

    opacitySlider: "#RightBox input.opacity-slider",

    fontFamilySelect: "#RightBox select.panel-select.mt-3",      // first font dropdown
    fontStyleSelect: "#RightBox .btn-row.mt-2 select.panel-select", // second dropdown

    fontSizeInput: "#RightBox .percent-box input.PBg",          // px input

    alignLeft:  "#RightBox img[src='images/NewIcon/LeftAlign.svg']",
    alignCenter:"#RightBox img[src='images/NewIcon/CenterAlign.svg']",
    alignRight: "#RightBox img[src='images/NewIcon/RightAlign.svg']",

    boldBtn:     "#RightBox a[mattooltip='Bold']",
    italicBtn:   "#RightBox a[mattooltip='Italic']",
    underlineBtn:"#RightBox a[mattooltip='Underline']",

    textColorHeading: "#RightBox .right_heading.mt-3",          // will contain "Text Color"
    colorPickerWrapper: "#RightBox .color-picker",
    colorInput: "#RightBox .color-picker input[type='color']",
    colorHexInput: "#RightBox .color-picker input[type='text']",

    colorPercentInput: "#RightBox .color-row .percent-box input.PBg",
  };

  // alias for backward-compatible name
  locators = this.weblocators;

  // --------- methods: click on the save button --------- //
  clickSaveButton() {
    cy.get(this.weblocators.saveBtn).click();
    cy.wait(1000); 
  }
 // --------- enter template name in the input box --------- //
  enterTemplateName(templateName) {
  cy.get(this.weblocators.templateNameInput)
    .should('be.visible')
    .clear()
    .type(templateName);
}
 //---------- enter meta & Click tags in the input box --------- //
  enterMetaTags(metaTags) {
    cy.get(this.weblocators.metaTagsInput)
      .should('be.visible') 
      .clear()
      .type(metaTags)
      cy.get(this.weblocators.clickMetaTagsInput).click();

    }

    //---------- Click on Save Template button ---------- //
    // expect: 'success' | 'error' (default: 'success')
    clickSaveTemplateButton(expectation = 'success') {
      cy.contains('button', this.weblocators.savetemplateBtn)
        .should('be.visible')
        .click();
     
    }
    //------- click on Cancel button-------//
    clickCancelButton() {
      cy.contains('button', this.weblocators.cancelbutton)
      .should('be.visible','Cancel button is visible')
      .click();
    }
  // ---------- Click on Create Template ---------- //
  clickCreateTemplate() {
    cy.contains('a', this.weblocators.createTemplateLink).click();
  }

  // ---------- Select User Type ---------- //
  selectUserType(userType) {
    if (!userType) return;

    cy.get(this.weblocators.userTypeDropdown)
      .should('be.visible')
      .select(userType);
  }

  // // ---------- Select ID Card Type ---------- //
selectIdCardTypeByValue(value) {
  cy.contains('label.panel-label', 'ID Card Type')
    .next('select.panel-select')
    .should('be.visible')
    .find('option')
    .should('have.length.at.least', 2);

  cy.contains('label.panel-label', 'ID Card Type')
    .next('select.panel-select')
    .select(value);
}

clickOrientationPortraitThenLandscape() {

  // Click Portrait
  cy.contains('label.panel-label', 'Orientation')
    .next('.btn-row')
    .contains('a.btn-2', 'Portrait')
    .should('be.visible')
    .click();

  // Verify Portrait active
  cy.contains('label.panel-label', 'Orientation')
    .next('.btn-row')
    .contains('a.btn-2', 'Portrait')
    .should('have.class', 'ActiveOr');

  // Click Landscape
  cy.contains('label.panel-label', 'Orientation')
    .next('.btn-row')
    .contains('a.btn-2', 'Landscape')
    .should('be.visible')
    .click();

  // Verify Landscape active
  cy.contains('label.panel-label', 'Orientation')
    .next('.btn-row')
    .contains('a.btn-2', 'Landscape')
    .should('have.class', 'ActiveOr');
}



  // ---------- Click Portrait & Landscape ---------- //
  clickProtraitbtt() {
    cy.get(this.weblocators.portraitIcon).click();
    
  }
  clickontlandscapebtt(){
        cy.get(this.weblocators.landscapeIcon).click();
  }

  // ---------- Click Bottom Tools ---------- //
  clickBottomTools() {
    cy.get(this.weblocators.textBtn).click();
    cy.get(this.weblocators.templateBtn).click();
    cy.get(this.weblocators.shapesBtn).click();
    cy.get(this.weblocators.backgroundsBtn).click();
    cy.get(this.weblocators.elementsBtn).click();
  }

      //------ used student type dataname loctors -------------//
      searchstudentdeatils(fieldname) {
        cy.get(this.weblocators.searchboxinput).clear().type(fieldname);
       }
dragFieldToCanvas(fieldName, textToEnter, clickPoint = { x: 300, y: 200 }) {
  cy.log(`Adding field to canvas: ${fieldName}`);

  // 1) Select the field from the list
  cy.contains("div.item", fieldName)
    .should("be.visible")
    .click({ force: true });

  cy.wait(500);

  // 2) Double-click field to add it to the canvas
  cy.contains("div.item", fieldName)
    .should("be.visible")
    .dblclick({ force: true });

  cy.wait(1000);
  cy.log(`Field ${fieldName} added to canvas`);

  // 3) Click on the field on the canvas (at some coordinates)
  cy.get("canvas.upper-canvas")
    .should("be.visible")
    .realClick(clickPoint);  // e.g. { x: 300, y: 200 }

  // 4) Type into the hidden Fabric.js textarea
  cy.get("textarea")
    .should("exist")
    .type(textToEnter, { force: true });
}


clickBackgroundsBtn() {
  cy.get(this.weblocators.backgroundsBtn).click();

}
clickInsideBackgroundButton() {
  cy.contains('a',this.weblocators.insidebackgroundbutton).click();  
}
clickSelectBackground(index) {
    
        cy.get('.backgroun-grid .backgroun-box')
          .eq(index)
          .scrollIntoView()
          .should('be.visible')
          .click();   
}
addTextButton() {
  cy.get(this.weblocators.addText).click();  
}
verifysuccessMessage() {
  cy.get(this.weblocators.sucessfullymessage)
  
}
//-------Elements button methods-------//
clickElementsBtn() {
  cy.get(this.weblocators.elementsBtn).click();
}
searchElement(fieldname) {
  cy.get(this.weblocators.searchbox).clear().type(fieldname);
 }
selectElement() {
  cy.get(this.weblocators.selectelement).click();
}

//-------Shapes button methods-------//
clickShapesBtn() {
  cy.get(this.weblocators.shapesBtn).should('be.visible')
  .click();
}
colsebttn(){
  cy.get(this.weblocators.colsebttn).click(); 
}
textnameonshape() {
  cy.contains('div.po_hd',this.weblocators.textnameonshape).click()
   .find('a img')
  .should('be.visible');
 }
chooseShapesStar() {
  cy.get(this.weblocators.chooseShapesStar).click();
}
chooseShapescircle() {
  cy.get(this.weblocators.chooseShapescircle).click();
}


//------- Shapes textproperties methods -----//
verifyShapesPanelOpened() {
cy.get(this.weblocators.textpropertiespanel)
  .should('be.visible')
  .and('contain.text', 'Shapes properties');
}
rotationInputshapes(){
  cy.get('#RightBox .ShapesPrperties .degree[type="number"]')
  .clear()
  .type('90')
  .should('have.value', '90')
  .closest('.btn-row')
  .should('contain.html', '90');
}

fiplXshape() {
  cy.contains('#RightBox .ShapesPrperties .btn-2', 'FlipX')
  .should('be.visible')
  .click();

}
flipYshapes(){
  cy.contains('#RightBox .ShapesPrperties .btn-2', 'FlipY')
  .should('be.visible')
  .click();

}
verifytextVisibility() {

cy.get('#RightBox .ShapesPrperties label.panel-label.mt-3')
  .should('be.visible')
  .and('contain.text', 'Visibility');

}
verifybringtofrontbtt(){
   cy.contains('#RightBox .ShapesPrperties .btn-2', 'Bring to front')
  .should('be.visible')
  .click();
 }
 verifysendtobackbtt(){
   cy.contains('#RightBox .ShapesPrperties .btn-2', 'Send to back')
  .should('be.visible')
  .click();
 }

 verifytextopacity(){
  cy.get('#RightBox .ShapesPrperties .right_heading.mt-3')
  .should('be.visible')
  .and('contain.text', 'Opacity');
 }
 verifydeufaultopacityvalue(){
  cy.get('#RightBox .ShapesPrperties .opacity-slider')
  .should('have.value', '100');

 }
 verifyIncaseopacityvalue(){
  cy.get('#RightBox .ShapesPrperties .opacity-slider')
  .invoke('val', 80)        // change value
  .trigger('input')         // update UI
  .trigger('change');       // notify Angular

   cy.get('#RightBox .ShapesPrperties .opacity-slider')
  .should('have.value', '80');

  cy.get('#RightBox .ShapesPrperties .percent-box')
  .should('contain.text', '80');
 
 }

 verifyDecaseopacityvalue(){
 cy.get('#RightBox .ShapesPrperties .opacity-slider')
  .invoke('val', 40)
  .trigger('input')
  .trigger('change');

  cy.get('#RightBox .ShapesPrperties .opacity-slider')
  .should('have.value', '40');

 cy.get('#RightBox .ShapesPrperties .percent-box')
  .should('contain.text', '40');
 }
 verifyShapecolorTextvisible(){
  cy.contains('#RightBox .ShapesPrperties .right_heading.mt-3', 'Shape Color')
  .should('be.visible');
 }
 verifyHexcolorinputvisible(){
  cy.get('#RightBox .ShapesPrperties .color-row .color-picker input[type="text"]')
  .should('have.value', '000000');

 }
 VerifyValidatePercentinputvisible(){
  cy.contains('#RightBox .ShapesPrperties .right_heading.mt-3', 'Shape Color')
  .should('be.visible');
 }
verifiycolorinputvalue(color){
  cy.get('#RightBox .ShapesPrperties .color-picker input[type="text"]')
  .first()          // Select Shape Color, not Border
  .clear()
  .type(color)
  .should('have.value', color);
 
}
verifyborderTextvisible(){
  cy.contains('#RightBox .ShapesPrperties .right_heading.mt-3', 'Border')
  .should('be.visible');

}

verifydefaultbordercolorvalue(){
  cy.get('#RightBox .ShapesPrperties .color-row .color-picker input[type="text"]')
  .should('have.value', '#800000');

}
verifydefaultborderpaxvalue(){
    cy.get('#RightBox .ShapesPrperties .color-row .percent-box input[type="number"]')
    .should('have.value', '1');

}
entervalueinborderpxinput(px){
  cy.contains('#RightBox .ShapesPrperties .percent-box', 'px')
    .find('input[type="number"]')
    .clear()
    .type(`${px}`)
    .should('have.value', `${px}`);
}
enterBorderColorValue(hexWithoutHash) {
  cy.contains('#RightBox .ShapesPrperties .right_heading', 'Border')   // <div>Border</div>
    .next('.color-row')                                                // its color row
    .find('.color-picker input[type="text"][maxlength="6"]')           // hex input
    .clear()
    .type(hexWithoutHash)
    .should('have.value', hexWithoutHash);
}





//-------Delete button methods-------//
clickDeleteBtn() {
  cy.get(this.weblocators.deleteBtn).click();
}
//--s-----Undo&Redo button methods-------//
clickUndoBtn() {
  cy.get(this.weblocators.undoBtn).click();
}
clickRedoBtn() {
  cy.get(this.weblocators.redoBtn).click();
}
//-------Zoom In&Out button methods-------//
clickZoomInBtn() {
  cy.get(this.weblocators.zoomInBtn).click();
}
clickZoomOutBtn() {
  cy.get(this.weblocators.zoomOutBtn).click();  
}
//-------Text Properties methods-------//
 

  verifyPanelOpened() {
    cy.get(this.locators.panel).should("be.visible");
    cy.contains(this.locators.header, "Text Properties").should("be.visible");
  }

  // ---------- ROTATION / FLIP ---------- //

  setRotation(angle) {
    cy.get(this.locators.rotationInput)
      .clear()
      .type(`${angle}`);
  }

  clickFlipX() {
    cy.get(this.locators.flipX).click();
  }

  clickFlipY() {
    cy.get(this.locators.flipY).click();
  }

  clickBringToFront() {
    cy.get(this.locators.bringToFront).click();
  }

  clickSendToBack() {
    cy.get(this.locators.sendToBack).click();
  }

  // ---------- OPACITY ---------- //

  setOpacity(value) {
    cy.get(this.locators.opacitySlider)
      .invoke("val", value)
      .trigger("input")
      .trigger("change");
  }

  // ---------- TYPOGRAPHY ---------- //

  // Select the first option whose text or value matches `fontName`.
 
  selectFontFamily(fontName) {
    if (!fontName) {
      cy.log('Font name not provided');
      return;
    }
    cy.get(this.locators.fontFamilySelect).then($select => {
      const $opts = $select.find('option').filter((i, el) => {
        const txt = el.textContent && el.textContent.trim();
        return txt === fontName || el.value === fontName;
      });
      if ($opts.length > 0) {
        const firstVal = $opts.first().val();
        cy.wrap($select).invoke('val', firstVal).trigger('change').trigger('input');
      } else {
        cy.log(`Font "${fontName}" not found, skipping selection`);
      }
    });
  }

  // Get all available fonts and loop through one by one
  getAllFonts() {
    cy.get(this.locators.fontFamilySelect)
      .find('option')
      .then($options => {
        const fonts = [];
        $options.each((index, el) => {
          const fontValue = el.value;
          if (fontValue) {
            fonts.push(fontValue);
          }
        });
        cy.log('Available Fonts: ' + fonts.join(', '));
        return cy.wrap(fonts);
      });
  }

  // Loop through all fonts and select each one (set by value)
  loopAllFonts() {
    cy.get(this.locators.fontFamilySelect)
      .find('option')
      .then($options => {
        $options.each((index, el) => {
          const fontValue = el.value;
          if (fontValue) {
            cy.log(`Font ${index}: ${fontValue}`);
            cy.get(this.locators.fontFamilySelect)
              .invoke('val', fontValue)
              .trigger('change')
              .trigger('input');
            cy.wait(300);
          }
        });
      });
  }

  selectFontStyle(style) {
    if (!style) {
      cy.log('Font style not provided');
      return;
    }
    cy.get(this.locators.fontStyleSelect).then($select => {
      const $opts = $select.find('option').filter((i, el) => {
        const txt = el.textContent && el.textContent.trim();
        return txt === style || el.value === style;
      });
      if ($opts.length > 0) {
        const firstVal = $opts.first().val();
        cy.wrap($select).invoke('val', firstVal).trigger('change').trigger('input');
      } else {
        cy.log(`Font style "${style}" not found, skipping selection`);
      }
    });
  }

  // Get all available font styles and loop through one by one
  getAllFontStyles() {
    cy.get(this.locators.fontStyleSelect)
      .find('option')
      .then($options => {
        const styles = [];
        $options.each((index, el) => {
          const styleValue = el.value;
          if (styleValue) {
            styles.push(styleValue);
          }
        });
        cy.log('Available Font Styles: ' + styles.join(', '));
        return cy.wrap(styles);
      });
  }

  // Loop through all font styles and select each one (set by value)
  loopAllFontStyles() {
    cy.get(this.locators.fontStyleSelect)
      .find('option')
      .then($options => {
        $options.each((index, el) => {
          const styleValue = el.value;
          if (styleValue) {
            cy.log(`Font Style ${index}: ${styleValue}`);
            cy.get(this.locators.fontStyleSelect)
              .invoke('val', styleValue)
              .trigger('change')
              .trigger('input');
            cy.wait(300);
          }
        });
      });
  }

  setFontSize(px) {
    if (!px && px !== 0) {
      cy.log('Font size not provided');
      return;
    }
    cy.get(this.locators.fontSizeInput)
      .first()
      .clear()
      .type(`${px}`)
      .should('have.value', `${px}`);
  }

  alignLeft() {
    cy.get(this.locators.alignLeft).click();
  }

  alignCenter() {
    cy.get(this.locators.alignCenter).click();
  }

  alignRight() {
    cy.get(this.locators.alignRight).click();
  }

  toggleBold() {
    cy.get(this.locators.boldBtn).click();
  }

  toggleItalic() {
    cy.get(this.locators.italicBtn).click();
  }

  toggleUnderline() {
    cy.get(this.locators.underlineBtn).click();
  }

  // ---------- TEXT COLOR ---------- //

  setTextColor(hexWithoutHash, percent = 100) {
    const hex = `#${hexWithoutHash}`;

    // set color picker value
    cy.get(this.locators.colorInput)
      .invoke("val", hex)
      .trigger("input")
      .trigger("change");

    // set hex text input
    cy.get(this.locators.colorHexInput)
      .first()
      .clear()
      .type(hexWithoutHash);

    // set % input
    cy.get(this.locators.colorPercentInput)
      .first()
      .clear()
      .type(`${percent}`);
  }

    //-- verify background methods all elements visible-------//  
     verifybackgroundtextvisible(){ 
      cy.get('.po_hd').contains('Background').should('be.visible');

     }
      verifyclosebutton(){
        cy.get('img[src="images/NewIcon/Cross.svg"]').should('be.visible');

      }
      verifyuploadbackgroundBtt(){
        cy.get('label[for="BackgroundUpload"]').should('contain.text', 'Upload background').and('be.visible');
        cy.get('#BackgroundUpload').should('exist');
      
      }
      
      verifysearchbox(searchinput){
        cy.get('.search-box2 input')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Search...')
        .clear().type(searchinput).should('have.value', searchinput);
        
      }

      verifyAddedyouTextvisible(){
        cy.contains('h4', 'Added by you')
        .scrollIntoView()
        .should('exist')
        .and('be.visible', { force: true });
         

      }
       verifysystempattern(){  
       cy.contains('h4', 'System Pattern')
      .scrollIntoView()
      .should('be.visible');
       }
       verifypatternbtt(){
        cy.contains('a', 'Pattern')
       .should('be.visible')
       .click();
       }
       verifybackgroundbtt(){
        cy.contains('a', 'Background')
        .should('be.visible')
        .click();
        cy.contains('h4','System Background').should('be.visible');
       }

clickBackgroundAndSelectImage(index) {

    // Click the Background tab
    cy.contains('.tabbg a', 'Background')
      .should('be.visible')
      .click();

    // Wait for backgrounds to load
    cy.get('.backgroun-grid', { timeout: 10000 })
      .should('be.visible');

    // Click background by index
    cy.get('.backgroun-grid .backgroun-box')
      .eq(index)
      .scrollIntoView()
      .should('be.visible')
      .click();
}

backgroundheadingtext(){
     cy.contains('div.right_heading', 'Background Properties')
    .should('exist')
    .and('be.visible');
}
verifyFlipx(){
   cy.contains('a.btn-2', 'FlipX')
    .should('exist')
    .and('be.visible')
    .click();
}
verifyFlipy(){
   cy.contains('a.btn-2', 'FlipY')
    .should('exist')
    .and('be.visible')
    .click()
}
 verifyOpacitytextvisible(){
   cy.contains('div.right_heading', 'Opacity')
    .should('exist')
    .and('be.visible');
 }
 verifydefaultdisplayedvalue(){
   cy.get('.percent-box')
    .should('contain.text', '100');
 }
verifyIncreaseopacity(){
   cy.get('.opacity-slider')
    .invoke('val', 80)
    .trigger('input')
    .trigger('change');

     cy.get('.percent-box')
    .should('contain.text', '80');
}
verifydecreaseopacity(){
   cy.get('.opacity-slider')
    .invoke('val', 50)
    .trigger('input')
    .trigger('change');

      cy.get('.percent-box')
      .should('contain.text', '50');
}
   verifyBackgroundColorheadingvisible(){
 cy.contains('div.right_heading', 'Background Color')
    .should('exist')
    .and('be.visible');

   }
   Verifydefaulthexinputexistsandisvisible(){
     cy.get('.color-picker input[type="text"]')
    .should('exist')
    .and('be.visible')
    .and('have.attr', 'maxlength', '6'); 
   }
   verifydefaultpercentageinputexistsandivisible(){
      cy.get('.percent-box input[type="number"]')
     .should('exist')
     .and('be.visible')
     .and('have.attr', 'min', '0')
     .and('have.attr', 'max', '100');
   }
   Entercolorcode(typecolor){
     cy.get('.color-picker input[type="text"]')
    .clear()
    .type(typecolor) // Red color
    .should('have.value', typecolor);
   }

   EnterOpacity(typevalue){
     cy.get('.percent-box input[type="number"]')
    .clear()
    .type(typevalue)
    .should('have.value', typevalue);
   }
    verifyactiontext(){
       // Verify "Actions" heading is visible
        cy.contains('div.right_heading', 'Actions')
      .should('exist')
       .and('be.visible');
    }

     verifydeletebtt(){
    // Verify Delete Background button is visible
     cy.contains('a.btn-2', 'Delete Background')
    .should('exist')
    .and('be.visible');
  
     }

     verifydeletebutton(){
      
  // Verify Delete button is clickable
       cy.contains('a.btn-2', 'Delete Background')
      .click();
     }

     //  verify elements methods 
      //  Verify popup panel is visible
  verifyPopupVisible() {
    cy.get('.popup-panel')
      .should('exist')
      .and('be.visible');
  }

  // Verify popup header text "Elements"
  verifyHeaderText() {
    cy.contains('.po_hd', 'Elements')
      .should('exist')
      .and('be.visible');
  }

  //  Verify Close button visible
  verifyCloseButtonVisible() {
      cy.get('.po_hd a img[src*="Cross.svg"]')
      .should('exist')
      .and('be.visible');
  }

  //  Verify Search box + placeholder
  verifySearchBox() {
    cy.get('.search-box2 input')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'placeholder', 'Search...');
  }

  //  Verify "Added by you" text
  verifyAddedByYouText() {
    cy.contains('h4', 'Added by you')
      .should('exist')
      .and('be.visible');
  }

  //  Verify "System Elements" text
 verifySystemElementsText() {
  cy.contains('h4', 'System Elements')
    .should('exist');
}

  //  Verify scroll container is scrollable
  verifyScrollableArea() {
    cy.get('.scrol-300')
      .should('exist')
      .and('be.visible')
      .then($el => {
        const el = $el[0];
        expect(el.scrollHeight).to.be.greaterThan(el.clientHeight);
      });
  }

  //  Verify images inside grid exists
  verifyImagesInGrid() {
    cy.get('.backgroun-grid .backgroun-box img')
      .should('exist')
      .and('have.length.greaterThan', 0);
  }

  // Hover on first element and check hover effect
 hoverAllElements() {
  cy.get('.backgroun-grid .backgroun-box').each(($el) => {
    cy.wrap($el)
      .trigger('mouseenter')
      .should('exist')
      .and('be.visible')
      .trigger('mouseleave');
  });
}

  // Verify Close button closes popup
  verifyClosePopup() {
    cy.get('.po_hd a img[src*="Cross.svg"]').click();
    cy.get('.popup-panel').should('not.exist');
  }
  clickAddedByYouElement(index = 0) {
  cy.contains('h4', 'Added by you')
    .parent()
    .find('.backgroun-grid .backgroun-box')
    .eq(index)
    .click({ force: true });
}

clickAddedByYouElement(index = 0) {
  cy.contains('h4', 'Added by you')
    .parent()
    .find('.backgroun-grid .backgroun-box')
    .eq(index)
    .click({ force: true });
}

clickSystemElement(index = 0) {
  cy.contains('h4', 'System Elements')
    .parent()
    .find('.backgroun-grid .backgroun-box')
    .eq(index)
    .click({ force: true });
}

   //----------------  Relative  all left side search box -------------------//
     headingsList = [
    'Personal Details',
    'Admission & Academic Details',
    'Family Details',
    'Contact & Address Details'
   
  ];

    verifyAllHeadingsVisible() {
    this.headingsList.forEach((heading) => {
      cy.contains('div.right_heading', heading)
        .scrollIntoView()
        .should('exist')
        .and('be.visible');
    });
  }

  buttomTemplateBtt(){
    cy.contains('.bar-item', 'Templates').click();
  }
 selectTemplate(index) {
        cy.get('.backgroun-grid .backgroun-box')
          .eq(index)
          .click({ force: true });
    }

selectTemplateByName(templateName) {
  cy.get('.backgroun-grid .backgroun-box').each(($el) => {
    cy.wrap($el)
      // .trigger('mouseover')
      .invoke('attr', 'aria-describedby')
      .then((id) => {
        if (!id) return;

        cy.get(`#${id}`).then(($tooltip) => {
          cy.wait(2000);
          if ($tooltip.text().trim() === templateName) {
            cy.wrap($el).click({ force: true });
          }
        });
      });
  });
}
    verifyUpdateButton() {
    cy.contains('button', /Update Template/i)
      .should('be.visible')
      .and('not.be.disabled');
}
clickUpdateButton() {
    cy.contains('button', /Update Template/i).click();
}
clickCancelButton() {
cy.contains('button', 'Cancel').should("be.visible");

}

 clickTemplate() {
    cy.contains('a', 'Template')
      .should('be.visible')
      .should('exist')
      .click();
       cy.log('Template link clicked');
  }

     //----- Template Releative  methods ------
       selectUserType(userType) {
       cy.get('select.panel-select.mt-3')
      .should('be.visible')
      .select(userType);
  }

    typeInSearchBox(text) {
    cy.get('div.search-box.mt-3 input[type="text"]')
      .should('be.visible')
      .clear()
      .type(text);
  }
  
  verifyFirstSearchResult(expectedTemplateName) {
    cy.get('td.cdk-column-template')
      .first()
      .should('be.visible')
      .and('contain.text', expectedTemplateName);
  }

    verifyMetaTagValue(expectedValue) {
    cy.get('td.cdk-column-metaTags')
      .first()
      .should('be.visible')
      .and('contain.text', expectedValue);
  }
    verifyOrientationLandscape(Orientation) {
    cy.get('td.cdk-column-orientation')
      .first()
      .should('be.visible')
      .and('contain.text', Orientation);
  }
    clickDeleteIcon() {
    cy.get('td.cdk-column-action')
      .first()
      .within(() => {
        cy.get('button, mat-icon, img')
          .should('be.visible')
          .click();
      });

      
  }

    verifyNoDataAfterDelete(templateName) {
    cy.get('td.mat-cell[colspan="4"]')
      .should('be.visible')
      .and(
        'contain.text',
        `No data matching the filter "${templateName}"`
      );
  }
selectUserType(userTypeValue) {
  cy.contains('label.panel-label', 'User Type')
    .next('select.panel-select')
    .should('be.visible')
    .select(userTypeValue);
}


selectUserTypeunderTemplate(userType) {
  cy.get('select.panel-select.mt-3')
    .should('be.visible')
    .select(userType);
}
//Academic Year – Select by VALUE
selectAcademicYearByValue(value) {
  cy.contains('label.panel-label', 'Academic Year')
    .should('be.visible')
    .next('select.panel-select')
    .should('be.visible')
    .select(value);
}

verifyAllAcademicYearsVisible(expectedYears) {
  cy.contains('label.panel-label', 'Academic Year')
    .next('select.panel-select')
    .should('be.visible')
    .find('option')
    .then(options => {
      const actualYears = [...options].map(o => o.text.trim());

      expectedYears.forEach(year => {
        expect(actualYears, `Year ${year} should be visible`).to.include(year);
      });
    });
}


   // select Academic years one bye one 
   selectAcademicYearsOneByOne() {
  cy.contains('label.panel-label', 'Academic Year')
    .should('be.visible')
    .next('select.panel-select')
    .find('option')
    .each(option => {
      const yearText = option.text().trim();
      const yearValue = option.val();

      cy.contains('label.panel-label', 'Academic Year')
        .next('select.panel-select')
        .select(yearValue);

      cy.contains('label.panel-label', 'Academic Year')
        .next('select.panel-select')
        .find('option:selected')
        .should('have.text', yearText);
    });
}

 clickonlnadscpes(){
   cy.contains('label.panel-label', 'Orientation')
    .next('.btn-row')
    .contains('a.btn-2', 'Landscape')
    .should('be.visible')
    .click();
 }
 // Hover on Back side icon
   verifybacksideicon(){
 cy.get('a[mattooltip="Back Side"]')
  .trigger('mouseover');

// assert tooltip text exists in DOM
  cy.contains('Back Side')
  .should('exist');
   }
  clickontheBackidcardicon(){
    cy.get('a[mattooltip="Back Side"]')
  .click();
  }

  verifyforntsideICard(){
    cy.get('a[mattooltip="Front Side"]')
    .should('be.visible')
    .trigger('mouseover');

// Verify tooltip text exists (NOT visible)
  cy.contains('Front Side')
  .should('exist');
  }
  clickonfronsideIcard(){
    cy.get('a[mattooltip="Front Side"]')
   .click();
  }
}

  



export default CreateTemplatePage;
