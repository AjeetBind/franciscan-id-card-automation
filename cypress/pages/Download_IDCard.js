class Download_IDCard{

     weblocators={
              downloadIdcard_menu:'a',
               headerText :'h5',
               userTypeSelect: "mat-select[name='userType']",
               academicYearLabel: "label",
               academicYearSelect: "mat-select[name='yearId']",
               classSearchInput: "input[matinput]",
                successToast: '#toast-container .toast-message',
             //===============student relative class weblocators =====
                selectTemplateLabel :'Select Template',
                selectTemplateDropdown : 'mat-select#mat-select-3',    
                templateOptions :'.cdk-overlay-pane mat-option',
                generateButton :'button.mat-mdc-button',             
                pageSizeLabelText : 'Page Size:',
                paperTypeLabelText :'Paper Type',
                paperSizeMatSelect :'mat-form-field mat-select[aria-labelledby*="mat-mdc-form-field-label-5"]',
                matOption :'.cdk-overlay-pane mat-option',
                downloadButton:'button.mat-mdc-button',
                modeRadioGroup :'mat-radio-group[name="userType"]',
                modeRadioButtons : 'mat-radio-button',
                studentNameLabel : 'label.main-label',
studentDropdown :'mat-select[placeholder="Select Students"], mat-select.mat-mdc-select-multiple',
studentOptions :'.cdk-overlay-pane mat-option',
selectAllCheckbox :'.mat-select-panel-select-all input[type="checkbox"]',

            
//========================== for mode write the weblocatrs ============
        modeLabel: 'label.main-label',
        modeRadioGroup: 'mat-radio-group[name="userType"]',
        classWiseRadio: 'mat-radio-button input[value="1"]',
        studentWiseRadio: 'mat-radio-button input[value="0"]'
            

     }
   clickOndownloadIdcard(){
      cy.contains(this.weblocators.downloadIdcard_menu,'Download ID Card').should('be.visible')
      .click();
   }
  verifyheaderTextvisible(){
    cy.contains(this.weblocators.headerText,'Print Id Card').should('contain','Print Id Card');
  }
   verifyAcademicYearLabelVisible() {
     cy.contains(this.weblocators.academicYearLabel, 'Academic Year')
      .should('exist');
  }
    verifyAcademicYearDropdownVisible() {
    cy.get(this.weblocators.academicYearSelect)
      .should('exist');
  }
    verifyUserTypeDropdownVisible() {
    cy.get(this.weblocators.userTypeSelect)
      .should('exist');
  }
selectAcademicYearByValue(yearText) {
  cy.contains('Academic Year')
    .should('be.visible');

  cy.get('mat-select[name="yearId"]')
    .should('be.visible')
    .click();

  cy.get('.cdk-overlay-pane mat-option')
    .contains(yearText)
    .click();

  cy.get('mat-select[name="yearId"]')
    .should('contain.text', yearText);
}

 selectUserType(userType) {
  cy.get(this.weblocators.userTypeSelect)
    .should('exist')
    .click();
  cy.get('.cdk-overlay-pane', { timeout: 10000 })
    .should('exist')
    .within(() => {
      cy.contains('.mdc-list-item__primary-text', userType)
        .should('exist')
        .click();
    });    
}
clickClassDropdown() {
  cy.contains('mat-label', 'Classes')
    .parents('mat-form-field')
    .find('mat-select')
    .should('exist')
    .click();
}
 searchClass(className) {
  cy.get('.cdk-overlay-pane', { timeout: 10000 })
     .should('exist')
     .within(() => {
      cy.get(this.weblocators.classSearchInput)
        .clear()
        .type(className);
    });
}
selectClass(className) {
  cy.get('.cdk-overlay-pane')
    .within(() => {
      cy.contains('.mdc-list-item__primary-text', className)
        .should('exist')
        .click();
    });
}
selectAllClasses() {
  cy.contains('strong', 'Select All')
  .closest('mat-checkbox')
  .click({ force: true });
}
  verifySuccessToastMessage(expectedMessage) {
  cy.get(this.weblocators.successToast)
    .should('be.visible')
    .and('contain.text', expectedMessage);
}

verifySelectTemplateLabelVisible() {
    cy.contains(this.weblocators.selectTemplateLabel)
      .should('be.visible');
  }

clickSelectTemplateDropdown() {
  cy.contains('mat-label', 'Select Format')
    .closest('mat-form-field')
    .find('.mat-mdc-select-trigger')
    .click({ force: true });
}
 searchTemplateName(TemplateName){
  cy.get("input[placeholder='Search...']").type(TemplateName);

 }
 selectTemplatebyName(templateName){
    cy.get('.cdk-overlay-pane mat-option')
    .contains(templateName)
    .click();
     // Verify selected value
    cy.contains('mat-label', 'Select Format')
    .closest('mat-form-field')
    .find('mat-select')
    .should('contain.text', templateName);
 }

  verifyGenerateButtonVisible() {
       cy.contains(this.weblocators.generateButton, 'Generate')
      .should('be.visible');
  }

    // Click Generate button (safe for Angular Material)
  clickGenerateButton() {
    cy.contains(this.weblocators.generateButton, 'Generate')
      .should('be.visible')
      .click({ force: true });
  }
verifyPaperSizeLabelVisible() {
  cy.contains('mat-label', 'Paper Size')
    .should('be.visible');
}

verifyPaperSizeLabel() {
  cy.get('mat-select')
    .should('have.attr', 'aria-labelledby')
    .then(attr => {
      expect(attr.toLowerCase()).to.include('paper');
    });
}

// Verify Download button visible
  verifyDownloadButtonVisible() {
    cy.contains(this.weblocators.downloadButton, 'Download')
      .should('be.visible');
  }

  selectPaperSize(paperSizeText) {

    // Click Paper Size dropdown
    cy.contains('label', this.weblocators.pageSizeLabelText)
      .closest('.col-md-12')
      .find('mat-select')
      .click({ force: true });

    // Select paper size from overlay
    cy.get(this.weblocators.matOption)
      .contains(paperSizeText)
      .click();

    // Assert selected value
    cy.contains('label', this.weblocators.pageSizeLabelText)
      .closest('.col-md-12')
      .find('mat-select')
      .should('contain.text', paperSizeText);
  }

  changeModeByName(modeName) {
  cy.get(this.weblocators.modeRadioGroup)
    .should('exist')
    .within(() => {
      cy.contains('label', modeName)
        .click({ force: true });
    });
}

  verifyStudentNameLabel() {
    cy.contains(this.weblocators.studentNameLabel, 'Student Name')
      .should('be.visible');
  }
    /* Open student dropdown */
  openStudentDropdown() {
    cy.get(this.weblocators.studentDropdown)
      .should('be.visible')
      .click({ force: true });
  }
    /* Select student by name */
   selectStudentByName(studentName) {

    cy.get(this.weblocators.studentOptions)
      .filter(':visible')               // IMPORTANT
      .contains('mat-option', studentName)
      .first()                           // ENSURES SINGLE ELEMENT
      .click();
  }
  

//============= Mode Ralative Methods ======================





}export default Download_IDCard;