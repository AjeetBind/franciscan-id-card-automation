class FieldsSetting {

  // ================= Web Locators =================
  weblocators = {
    fieldSettingMenuLink: "a[href='/IDCard/FieldsSetting']",
    fieldNameSearchBox: ".search-box input[placeholder='Search...']",
    searchIcon: ".search-box img[src*='Search.svg']",

    userTypeDropdown: "select.panel-select",

    tableHeaderRow: "tr.mat-mdc-header-row",
    tableRows: "tr.mat-mdc-row",
    columnNameCell: "td.mat-column-columnname",
    orderByInput: "td.mat-column-orderby input[type='number']",

    saveButton: "button.mat-mdc-button",
    saveButtonText: ".mdc-button__label",

    checkbox: "input[type='checkbox']",
    dateFormatDropdown: "select.textBxCus",

    toast: "#toast-container",

    createTemplateLink: "a",
    leftPanelItem: ".Dragcontainer .item"
  };

  // ================= Actions =================

  clickOnFieldSettingMenu() {
    cy.get(this.weblocators.fieldSettingMenuLink).click();
  }

  verifyfieldstextname() {
    cy.contains('h5', 'Fields Setting').should('be.visible');
  }

  selectUserType(userType) {
    cy.get(this.weblocators.userTypeDropdown)
      .should('be.visible')
      .select(userType);
  }

  clickSaveButton() {
    cy.contains(this.weblocators.saveButton, 'Save')
      .should('be.visible')
      .click();
  }

  clickontheSaveBtt() {
    this.clickSaveButton();
  }

  clickCreateTemplate() {
    cy.contains(this.weblocators.createTemplateLink, 'Create template').click();
  }

  // ================= Scroll =================

  scrollDown() {
    cy.get(this.weblocators.tableRows).last().scrollIntoView();
  }

  scrollUp() {
    cy.get(this.weblocators.tableHeaderRow).scrollIntoView();
  }

  // ================= Verifications =================

  verifySearchBoxWithIconVisible() {
    cy.get(this.weblocators.fieldNameSearchBox).should('be.visible');
    cy.get(this.weblocators.searchIcon).should('be.visible');
  }

  verifyUserTypeDropdownAndOptions() {
    cy.get(`${this.weblocators.userTypeDropdown} option[value="1"]`)
      .should('contain.text', 'User Type: Student');

    cy.get(`${this.weblocators.userTypeDropdown} option[value="2"]`)
      .should('contain.text', 'User Type: Staff');
  }

  verifyTableColumnHeadersVisible() {
    const headers = [
      'Column Name',
      'Category Name',
      'Order By',
      'Last Updated On',
      'Format'
    ];

    headers.forEach(h => {
      cy.contains('th', h).should('be.visible');
    });
  }

  verifySaveButtonVisible() {
    cy.get(this.weblocators.saveButtonText)
      .invoke('text')
      .then(text => {
        expect(text.trim()).to.eq('Save');
      });
  }

  verifySearchFiltersColumnName(searchText, delay = 100) {
    cy.get(this.weblocators.fieldNameSearchBox)
      .clear()
      .type(searchText, { delay });

    cy.get(this.weblocators.tableRows).each($row => {
      cy.wrap($row)
        .find(this.weblocators.columnNameCell)
        .invoke('text')
        .then(text => {
          expect(text.toLowerCase()).to.include(searchText.toLowerCase());
        });
    });
  }

  // ================= Order By =================

  enterOrderValue(value) {
    cy.get(this.weblocators.orderByInput)
      .first()
      .clear({ force: true })
      .type(value, { force: true });
  }

  // ================= Date Format =================

  verifyDateFormatDropdownOptionsVisible() {
    const expected = [
      '--Select--',
      'dd/MM/yyyy',
      'MM/dd/yyyy',
      'yyyy-MM-dd',
      'dddd, MMMM dd, yyyy',
      'dd-MM-yyyy',
      'dd-MMM-yyyy'
    ];

    cy.get(this.weblocators.dateFormatDropdown)
      .find('option')
      .then(opts => {
        const actual = [...opts].map(o => o.innerText.trim());
        expected.forEach(e => expect(actual).to.include(e));
      });
  }

  selectDateFormatByValue(value) {
    cy.get(this.weblocators.dateFormatDropdown)
      .filter(':visible')
      .select(value.toString());
  }

  // ================= Toast =================

  verifyerrorMessage() {
    cy.contains(
      this.weblocators.toast,
      "Duplicate 'Order By' values"
    ).should('be.visible');
  }

  verifySaveSuccessMessage() {
    cy.get(this.weblocators.toast)
      .should('be.visible')
      .and('contain.text', 'success');
  }

  verifyNoChangesDetectedMessage() {
    this.clickSaveButton();
    cy.get(this.weblocators.toast)
      .should('contain.text', 'No changes detected');
  }

  // ================= Checkbox =================

  verifyCheckboxCheckUncheck(selector) {
    cy.get(selector)
      .first()
      .check({ force: true })
      .should('be.checked')
      .uncheck({ force: true })
      .should('not.be.checked');
  }

  verifyMaxFieldSelectionErrorMessage() {
    cy.get(this.weblocators.checkbox).each(($cb, index) => {
      if (index < 16) cy.wrap($cb).check({ force: true });
    });

    this.clickSaveButton();

    cy.get(this.weblocators.toast)
      .should('contain.text', 'maximum of 15 fields');
  }

  verifyBoundaryFieldSelectionSuccess(count) {
    cy.get(this.weblocators.checkbox).uncheck({ force: true });

    cy.get(this.weblocators.checkbox).each(($cb, index) => {
      if (index < count) cy.wrap($cb).check({ force: true });
    });

    this.clickSaveButton();
    this.verifySaveSuccessMessage();
  }

  // ================= Create Template =================

  verifyFieldInLeftPanel(fieldName) {
    cy.get(this.weblocators.fieldNameSearchBox)
      .clear()
      .type(fieldName);

    cy.contains(this.weblocators.leftPanelItem, fieldName)
      .should('be.visible');
  }

  selectUser(userType) {
    cy.contains('label', 'User Type')
      .next('select.panel-select')
      .select(userType);
  }
}

export default FieldsSetting;
