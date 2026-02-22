import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({

  video: true,
  videoCompression: false,
  trashAssetsBeforeRuns: false,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: "index"
  },

  e2e: {
    experimentalOriginDependencies: true,
    baseUrl: "https://appuat.franciscanecare.net/Login/Identifier?SchCode=DEMOIN",

    pageLoadTimeout: 120000,
    requestTimeout: 15000,
    responseTimeout: 15000,

    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
  },

env: {
  URL: "https://appuat.franciscanecare.net/Login/Identifier?SchCode=DEMOIN",
  IDCARD_URL: "https://idcarduat.franciscanecare.net",
},

reporter: 'junit',
reporterOptions: {
  mochaFile: 'cypress/results/results-[hash].xml'
}
});