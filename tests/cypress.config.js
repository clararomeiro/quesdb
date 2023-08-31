const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 15_000,
  defaultCommandTimeout: 15_000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
  },
});
