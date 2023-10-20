const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rvr7y5',

  viewportWidth: 1920,
  viewportHeight: 1080,
  
  reporter: "mochawesome",
   reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true
  },

  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  
});
