const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 200000,
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reporter: 'mocha-allure-reporter',
    reportFilename: 'testresults',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  projectId: '78a7r5',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
