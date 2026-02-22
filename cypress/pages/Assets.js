class Assets {

  weblocators = {
    
    //================== Create Template =======================//
    createTemplateLink: "Create template",
    backgroundsBtn: "img[src='images/NewIcon/Backgrounds.svg']",
    searchBoxInput: '.search-box2 input',
    assetNameText: '.backgroun-box, .pattern-grid-in, .element-grid-in',
    patternGrid: '.pattern-grid-in, .backgroun-box, .element-grid-in',


    //================== Assets link =======================//
    assetsLink: "a[href='/IDCard/Assets']",
    uploadAssetsButton: "a[href='/IDCard/UploadAssets']",
    headersText: "h5",
    listViewIcon: "button i.fas.fa-list",
    gridViewIcon: "button i.fas.fa-th-large",
    assetsNameSearchBox: ".search-box input[placeholder='Search...']",
    searchIcon: ".search-box img[src*='Search.svg']",
    tableHeaderRow: "tr.mat-mdc-header-row",
    tableRows: "tr.mat-mdc-row",
    assetNameColumn: "td:nth-child(1)", // Asset Name column

    //================== Upload Assets  Weblocators =============
    // ----- Labels -----
    assetsTypeLabel: "label:contains('Assets type')",
    assetsNameLabel: "label:contains('Assets Name')",
    metaTagLabel: "label:contains('Meta tags')",
    uploadFileLabel: "label:contains('Upload File')",

    // ----- Assets Type Dropdown -----
    assetsTypeDropdown: "mat-select[name='Assetstype']",
    assetsTypeOptions: "mat-option",

    // ----- Assets Name -----
    assetsNameInput: "input[name='AssetsName']",
//------------- meta tags----------------
metaAutocompletePanel: ".mat-mdc-autocomplete-panel",
metaOption: ".mat-mdc-option",
metaOptionText: ".mdc-list-item__primary-text",
selectAllCheckbox: ".select-all-wrapper mat-checkbox input",


    // ----- Upload -----
    dragDropText: ".upload-text",
    fileInput: "input[type='file']",
    uploadButton: "button:contains('Upload')",
    validationErrorMessages: ".mat-mdc-form-field-error",
    toastContainer: "#toast-container",
    toastMessage: "#toast-container .toast-message",
    fileInput: "input.files-input",
    // ----- Assets Table Verification -----
assetsTableRows: "tr.mat-mdc-row",
assetNameCell: "td.mat-column-asset",
assetTypeCell: "td.mat-column-assettype",
metaTagCell: "td.mat-column-meata",
addedDateCell: "td.mat-column-added",
deleteIcon: "td.mat-column-action img[src*='Delete.svg']",
// --- -- verify grid icons -----------//
      
  


  };

  /* ---------- Actions ---------- */

  clickOnAssetsLink() {
    cy.get(this.weblocators.assetsLink)
      .should('be.visible')
      .click();
    cy.log('Assets link clicked');
  }

  clickOnUploadAssetsButton() {
    cy.get(this.weblocators.uploadAssetsButton)
      .should('be.visible')
      .click();
    cy.log('Upload Assets button clicked');
  }
verifyUploadAssetsBttvisible(){
  cy.get(this.weblocators.uploadAssetsButton).should('be.visible');
}
  /* ---------- Verifications ---------- */

  verifySearchBoxWithIconVisible() {
    cy.get(this.weblocators.assetsNameSearchBox).should('be.visible');
    cy.get(this.weblocators.searchIcon).should('be.visible');
    cy.log('Search box and icon are visible');
  }
  searchbox(searchhere){
  cy.get(this.weblocators.assetsNameSearchBox).clear().type(searchhere);
  }

verifySearchFilterByAssetName(searchText, delay = 100) {
  cy.get(this.weblocators.assetsNameSearchBox)
    .clear()
    .type(searchText, { delay });

  cy.get('tbody tr').then($rows => {
    if ($rows.length > 0 && !$rows.hasClass('mat-mdc-no-data-row')) {
      cy.wrap($rows)
        .find(this.weblocators.assetNameColumn)
        .each($cell => {
          expect($cell.text().toLowerCase())
            .to.include(searchText.toLowerCase());
        });
    } else {
      cy.get('tr.mat-mdc-no-data-row')
        .should('contain.text', 'No data');
    }
  });
}



  verifyTableColumnHeadersVisible() {
    const headers = [
      'Asset Name',
      'Asset type',
      'Meta',
      'Added Date',
      'Action'
    ];

    headers.forEach(header => {
      cy.contains('th', header).should('be.visible');
    });

    cy.log('All table column headers are visible');
  }
  verifylistViewIconVisible(){
    cy.get(this.weblocators.listViewIcon).should('be.visible');
  }
  clickOnthelistViewIcon(){
   cy.get(this.weblocators.listViewIcon).should('be.visible').click();
  }
  verifygridViewIconvisible(){
    cy.get(this.weblocators.gridViewIcon).should('be.visible');
  }

  clickonlistViewIcon(){
    cy.get(this.weblocators.listViewIcon).should('be.visible').click();
  }
  clickongridViewIcon(){
    cy.get(this.weblocators.gridViewIcon).should('be.visible').click();
  }

    /* ---------- Assets Type  ---------- */

    verifyAssetstypeLabelTextVisible() {
    cy.contains('label', 'Assets type').should('be.visible');
  }

  verifySelectAssetsDropdownVisible() {
    cy.get(this.weblocators.assetsTypeDropdown).should('be.visible');
  }

  selectAssetstype(assetType) {
    cy.get(this.weblocators.assetsTypeDropdown).click();
    cy.contains('mat-option', assetType).click();
  }

  verifyAssetstypeDropdownOptionsVisible() {
    cy.get(this.weblocators.assetsTypeDropdown).click();
    cy.get(this.weblocators.assetsTypeOptions)
      .should('have.length.greaterThan', 0)
      .each(option => {
        cy.wrap(option).should('be.visible');
      });
  }

  /* ---------- Assets Name ---------- */

  verifyAssetsNameLabelTextVisible() {
    cy.contains('label', 'Assets Name').should('be.visible');
  }

  enterAssetsName(typeName) {
    cy.get(this.weblocators.assetsNameInput)
      .should('be.visible')
      .clear()
      .type(typeName)
      .should('have.value', typeName);
  }

  /* ---------- Meta Tags ---------- */

verifyMetaTagLabelTextVisible() {
  cy.contains('Meta tags')
    .should('be.visible');
}


  selectAllMetaTags() {
  cy.get(this.weblocators.metaTagInput)
    .should('be.visible')
    .click();

  cy.get(this.weblocators.metaAutocompletePanel)
    .should('be.visible');

  cy.get(this.weblocators.selectAllCheckbox)
    .check({ force: true });
}


selectMetaTagsByclick() {
  cy.get("#mat-mdc-form-field-label-2").click();
  cy.get("#mat-option-5").click();
  
}


verifyMultipleMetaTagsSelected(tagNames = []) {
  tagNames.forEach(tag => {
    this.verifyMetaTagSelected(tag);
  });
}


  

  verifySelectedMetaTagsVisible(expectedTag) {
    cy.get(this.weblocators.selectedMetaChips)
      .should('contain.text', expectedTag);
  }

  /* ---------- Upload File ---------- */

  verifyUploadFileLabelTextVisible() {
    cy.contains('label', 'Upload File').should('be.visible');
  }

  verifyDragAndDropTextVisible() {
    cy.contains('Drag and drop').should('be.visible');
    cy.contains('or click here').should('be.visible');
  }

uploadFile(fileName) {
  cy.log(`Uploading file: ${fileName}`);
  cy.fixture(fileName, 'base64').then(fileContent => {
    cy.get(this.weblocators.fileInput)
      .first()
      .selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, 'base64'),
          fileName: fileName,
          mimeType: 'image/jpeg',
        },
        { force: true }
      );
  });

}


  /* ---------- Upload Button ---------- */

  verifyUploadButtonVisible() {
    cy.get(this.weblocators.uploadButton)
      .should('be.visible')
      .and('be.enabled');
  }

  clickOnUploadButton() {
    cy.get(this.weblocators.uploadButton)
      .should('be.visible')
      .click();
     
  }

    /* ---------- Validation Errors ---------- */

  verifyAssetTypeRequiredErrorVisible() {
    cy.contains(this.weblocators.validationErrorMessages, 'Asset type is required')
      .should('be.visible');
  }

  verifyAssetsNameRequiredErrorVisible() {
    cy.contains(this.weblocators.validationErrorMessages, 'Assets Name is required')
      .should('be.visible');
  }

  verifySelectAssetsFileRequiredErrorVisible() {
    cy.contains(this.weblocators.validationErrorMessages, 'Select Assets File')
      .should('be.visible');
  }

 verifyGlobalValidationToastMessageVisible() {
  cy.get(this.weblocators.toastContainer)
    .should('be.visible');

  cy.get(this.weblocators.toastMessage)
    .should('be.visible')
    .and('contain.text', 'Please fix validation errors');
}
/* ---------- Upload Success Validation ---------- */
verifyUploadSuccessToastMessageVisible() {
  cy.get(this.weblocators.toastContainer)
    .should('be.visible');

  cy.get(this.weblocators.toastMessage)
    .should('be.visible')
    .and('not.contain.text', 'Please fix validation errors');
}

//------------ Assets Table Methods   --------------//
verifyAssetNameInGrid(expectedName) {
  cy.get(this.weblocators.assetsTableRows)
    .first()
    .find(this.weblocators.assetNameCell)
    .should('contain.text', expectedName);
}
verifyAssetTypeInGrid(expectedType) {
  cy.get(this.weblocators.assetsTableRows)
    .first()
    .find(this.weblocators.assetTypeCell)
    .should('contain.text', expectedType);
}
verifyMetaTagInGrid(expectedMeta) {
  cy.get(this.weblocators.assetsTableRows)
    .first()
    .find(this.weblocators.metaTagCell)
    .should('contain.text', expectedMeta);
}
verifyAddedDateInGrid() {
  cy.get(this.weblocators.assetsTableRows)
    .first()
    .find(this.weblocators.addedDateCell)
    .invoke('text')
    .should('match', /\d{2}-[A-Za-z]{3}-\d{4}/);
}
clickOnDeleteIcon() {
  cy.get(this.weblocators.assetsTableRows)
    .first()
    .find(this.weblocators.deleteIcon)
    .should('be.visible')
    .click();
}

verifyPatternGridVisibleAndHover() {
  cy.get(this.weblocators.patternGrid)
    .scrollIntoView()
    .should('be.visible')
    .trigger('mouseover');
}
verifyInvalidFileToastMessage() {
  cy.get(this.weblocators.toastMessage)
    .should('be.visible')
    .and('contain.text', 'Only JPG and PNG files are allowed.');
}
 clickCreateTemplate() {
    cy.contains('a', this.weblocatorscreateTemplateLink).click();
  }

  
clickBackgroundsBtn() {
  cy.get(this.weblocators.backgroundsBtn).click();
}

verifySearchBox(searchInput) {
  cy.get(this.weblocators.searchBoxInput)
    .should('be.visible')
    .and('have.attr', 'placeholder', 'Search...')
    .clear()
    .type(searchInput)
    .should('have.value', searchInput);
}
verifyDuplicateMetaTagMessage(tagName) {
  expect(tagName, 'meta tag name must be provided').to.exist;

  cy.get(this.weblocators.confirmationMessage, { timeout: 8000 })
    .should('be.visible')
    .and('contain.text', `"${tagName}" is already selected!`);
}
verifyDuplicateMetaTagMessage(tagName) {
  cy.get('#toast-container .toast-message')
    .should('be.visible')
    .and('contain.text', `"${tagName}" is already selected!`);
}

}

export default Assets;
