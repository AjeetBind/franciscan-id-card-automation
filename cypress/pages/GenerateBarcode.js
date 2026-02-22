class GenerateBarcode{
        weblocators={
        generateCodeLink: 'Generate Barcode',
        HeaderaText:"h5",
        academicYearLabel: "label",
        academicYearSelect: "mat-select[name='yearId']",
        userTypeSelect: "mat-select[name='userType']",
        classSelect: "mat-select[required]",
        classSearchInput: "input[matinput]",
        selectAllCheckbox: "mat-checkbox",
        classOptions: "mat-option",
        generateButton: "button[type='submit']",
        outsideSpace:"div[class='col-md-3']",
      successToast: '#toast-container .toast-message',
       errorToast: '#toast-container .toast-error .toast-message',

       //================Staff type weblocatrs =====================//
        staffTypeLabel: 'label.main-label',
        staffTypeDropdown: '#mat-select-value-3',
        StafftypeSearchInput:"div[class='mat-mdc-form-field-infix'] input#mat-input-1",

      //==========  select class Relative weblocatrs =============//
      classDropdown: "mat-select[required]",
      selectAllCheckbox: ".mat-select-panel-select-all mat-checkbox",
      selectAllInput: ".mat-select-panel-select-all input[type='checkbox']",
      classOptions: "mat-option.mat-mdc-option-multiple",
      selectedPseudoCheckbox: ".mat-pseudo-checkbox-checked",
      Nodatafound :"No data found"
        

      }

      clickGenerateCode() {
       cy.contains('a', this.weblocators.generateCodeLink)
       .should('be.visible')
       .should('exist')
       .click();
        cy.log(' Generate Barcode  link clicked');
  }
  verifyheaderText(){
     cy.contains(this.weblocators.HeaderaText,'Generate Barcode').should('be.visible');
  }
  
  // --------   VISIBILITY VERIFICATIONS    --------

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

  verifyClassDropdownVisible() {
    cy.get(this.weblocators.classSelect)
      .should('exist');
  }

verifyGenerateButtonVisible() {
  cy.contains(this.weblocators.generateButton, ' Generate Barcode ')
    .should('be.visible')
    .and('not.be.disabled');
}

  // -------- ACTION METHODS --------

  clickAcademicYearDropdown() {
    cy.get(this.weblocators.academicYearSelect).click();
  }

selectAcademicYearFromOverlay(yearText) {
  // Step 1: Open the dropdown (this creates the overlay)
  cy.get('mat-select[name="yearId"]', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });

  // Step 2: Now overlay exists → select value
  cy.get('.cdk-overlay-pane', { timeout: 10000 })
    .should('exist')
    .within(() => {
      cy.contains('mat-option', yearText)
        .should('be.visible')
        .click();
    });
}







  

 selectUserType(userType) {

  // Step 1: Open User Type dropdown (ONLY once)
  cy.get(this.weblocators.userTypeSelect)
    .should('exist')
    .click();

  // Step 2: Select user type from CDK overlay (PERMANENT FIX)
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
  cy.get('.cdk-overlay-pane')
    .within(() => {
      cy.contains('strong', 'Select All')
        .click();
    });
}
deselectAllClasses() {
  cy.get('.cdk-overlay-pane')
    .within(() => {
      cy.contains('strong', 'Select All')
        .click();
    });
}


clickGenerateButton() {
  cy.get('body').type('{esc}'); // close mat-select overlay

  cy.contains(this.weblocators.generateButton, ' Generate Barcode')
    .should('be.visible')
    .click();
}
  //------------  Select class Relative Methods -------------
   // ---------- OPEN CLASS DROPDOWN ----------
  openClassDropdown() {
    cy.get(this.weblocators.classDropdown).click();
  }

  // ---------- SELECT ALL CLASSES ----------
  selectAllClasses() {
    cy.get(this.weblocators.selectAllInput)
      .check({ force: true });
  }

  // ---------- VERIFY ALL CLASSES SELECTED ----------
  verifyAllClassesSelected() {
    cy.get(this.weblocators.classOptions).each(($option) => {
      cy.wrap($option)
        .find('.mat-pseudo-checkbox')
        .should('have.class', 'mat-pseudo-checkbox-checked');
    });
  }

  // ---------- DESELECT ALL CLASSES ----------
  deselectAllClasses() {
    cy.get(this.weblocators.selectAllInput)
      .uncheck({ force: true });
  }

  // ---------- VERIFY ALL CLASSES DESELECTED ----------
  verifyAllClassesDeselected() {
    cy.get(this.weblocators.classOptions).each(($option) => {
      cy.wrap($option)
        .find('.mat-pseudo-checkbox')
        .should('not.have.class', 'mat-pseudo-checkbox-checked');
    });
  }
  verifySuccessToastMessage(expectedMessage) {
  cy.get(this.weblocators.successToast)
    .should('be.visible')
    .and('contain.text', expectedMessage);
}

verifyRequiredFieldError(expectedMessage) {
  cy.get('.mat-mdc-form-field-error', { timeout: 6000 })
    .should('exist')
    .and('be.visible')
    .and('contain.text', expectedMessage);
}
//================== Staff type Methods ================//
verifyStaffTypeLabel() {
    cy.contains(this.weblocators.staffTypeLabel, 'Staff Type')
      .should('be.visible');
  }

 clickStaffTypeDropdown() {
    cy.get(this.weblocators.staffTypeDropdown)
      .should('be.visible')
      .click();
  }
searchStafftype(typeuser){
 cy.get(this.weblocators.StafftypeSearchInput).type(typeuser);
}

selectStafftype(Stafftype) {
  cy.get('.cdk-overlay-pane')
    .within(() => {
      cy.contains('.mdc-list-item__primary-text', Stafftype)
        .should('exist')
        .click();
    });
}
selectAllStaff() {
  cy.get('.cdk-overlay-pane')
     .within(() => {
      cy.contains('strong', 'Select All')
      .click();
    });
}
deselectAllStaff() {
  cy.get('.cdk-overlay-pane')
    .within(() => {
      cy.contains('strong', 'Select All')
        .click();
    });
}
verifyNodatafound(){
  cy.contains('div',this.weblocators. Nodatafound).should('be.visible');
}


}export default GenerateBarcode;