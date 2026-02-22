class TemplatePage {
    weblocatrs={
    Templatelink:"Template",
    templateText: 'h5',
    searchBox: "input[placeholder='Search...']",
    searchIcon: ".search-box.mt-3 .icon",
    userTypeDropdown: "select.panel-select",
    tableRows: "tbody tr.mat-mdc-row",
    templateColumn: "td.mat-column-template",
    metaTagColumn: "td.mat-column-metaTags",
    orientationColumn: "td.mat-column-orientation",
    actionDeleteIcon: "td.mat-column-action img[src*='Delete']"
     }
     clickontheTemplatelink() {
     cy.contains('a',this.weblocatrs.Templatelink).click();
  }
    verifyTemplateTextVisible() {
    cy.contains(this.weblocatrs.templateText, 'Template')
      .should('be.visible');
  }

  verifySearchBoxVisible() {
    cy.get(this.weblocatrs.searchBox)
      .should('be.visible');
  }

  verifySearchIconVisible() {
    cy.get(this.weblocatrs.searchIcon)
      .should('be.visible');
  }

  verifyUserTypeDropdownVisible() {
    cy.get(this.weblocatrs.userTypeDropdown)
      .should('be.visible');
  }
  selectUserType(userType) {
    
    cy.get(this.weblocatrs.userTypeDropdown)
      .select(userType);
  }
  verifyTableHeadersVisible() {
    cy.contains('th', 'Template').should('be.visible');
    cy.contains('th', 'Meta Tags').should('be.visible');
    cy.contains('th', 'Orientation').should('be.visible');
    cy.contains('th', 'Action').should('be.visible');
  }
    searchTemplate(templateName) {
    cy.get(this.weblocatrs.searchBox)
    .clear()
    .type(templateName);

  // Wait for table to refresh
  cy.wait(500);
}


  verifyTemplateVisible(templateName) {
    cy.get(this.weblocatrs.tableRows)
      .contains(templateName)
      .should('be.visible');
  }
  verifyMetaTag(templateName, metaTag) {
    cy.contains(this.weblocatrs.tableRows, templateName)
      .find(this.weblocatrs.metaTagColumn)
      .should('contain.text', metaTag);
  }

  verifyOrientation(templateName, orientation) {
    cy.contains(this.weblocatrs.tableRows, templateName)
      .find(this.weblocatrs.orientationColumn)
      .should('contain.text', orientation);
  }
  deleteTemplateIfExists(templateName) {
    cy.get('body').then(($body) => {
      if ($body.text().includes(templateName)) {
        cy.contains(this.weblocatrs.tableRows, templateName)
          .find(this.weblocatrs.actionDeleteIcon)
          .click();

      } else {
        cy.log(`Template "${templateName}" not found`);
      }
    });
  }



}

export default TemplatePage;
