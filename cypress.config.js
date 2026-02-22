import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({

  video: true,
  trashAssetsBeforeRuns: false,

  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, junit",

    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    },

    junitReporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml"
    }
  },

  e2e: {
    baseUrl: "https://appuat.franciscanecare.net/Login/Identifier?SchCode=DEMOIN",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
  }
});