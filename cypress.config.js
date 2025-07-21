const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  videosFolder: 'cypress/reports/videos',
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents: async (on, config) => {

      config.env = config.env || {};
      config.env.stepDefinitions = "cypress/e2e/**/steps/**/*.{js,ts}";

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
