class IDCardDashboardPage {

  weblocators = {
    createTemplateLink: 'Create template',
    fieldSettingsLink: 'Field settings',
    assetsLink: 'Assets',
    templateLink: 'Template',
    generateCodeLink: 'Generate code',
    downloadIdCardLink: 'Download ID Card',
    idCardVerificationLink: 'ID Card Verification',
    homeIcon: "a[href='/portal']",
    profileImage: "img[alt='profile-image']",
    logoutButton: "a[class='link-btn position-absolute d-block']",
    logoImage:"img[src='images/Logo.svg']"
  };
  verifyLogoVisible() {
   cy.get(this.weblocators.logoImage)
    .should('be.visible');
    cy.log('Logo is visible on the dashboard');
}

  clickCreateTemplate() {
    cy.contains('a', this.weblocators.createTemplateLink)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('Create Template link clicked');
  }

  clickFieldSettings() {
    cy.contains('a', this.weblocators.fieldSettingsLink, { timeout: 10000 })
      .should('be.visible')
      .should('exist')
      .click();
    cy.url().should('include', '/FieldsSetting');
    cy.log('Field Settings link clicked');
  }

  clickAssets() {
    cy.contains('a', this.weblocators.assetsLink, { timeout: 10000 })
      .should('be.visible')
      .should('exist')
      .click();
    cy.url().should('include', '/Assets');
    cy.log('Assets link clicked');
  }

  clickTemplate() {
    cy.contains('a', this.weblocators.templateLink)
      .should('be.visible')
      .should('exist')
      .click();
       cy.log('Template link clicked');
  }

  clickGenerateCode() {
    cy.contains('a', this.weblocators.generateCodeLink)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('Generate Code link clicked');
  }

  clickDownloadIdCard() {
    cy.contains('a', this.weblocators.downloadIdCardLink)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('Download ID Card link clicked');
  }

  clickIdCardVerification() {
    cy.contains('a', this.weblocators.idCardVerificationLink)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('ID Card Verification link clicked');
  }

  clickHomeIcon() {
    cy.get(this.weblocators.homeIcon)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('Home icon clicked');
  }

  logout() {
    cy.get(this.weblocators.profileImage)
      .should('be.visible')
      .should('exist')
      .click();
    cy.get(this.weblocators.logoutButton)
      .should('be.visible')
      .should('exist')
      .click();
    cy.log('User logged out successfully');
  }

  waitForDashboardLoad() {
    cy.origin(Cypress.env('IDCARD_URL'), () => {
      cy.contains('a', 'Create template', { timeout: 10000 })
        .should('be.visible');
    });
  }
  
 

  
}export default IDCardDashboardPage;
