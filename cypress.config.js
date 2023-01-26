const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack.config'),
    watchOptions: {},

    
  }
  on('file:preprocessor', webpackPreprocessor(options))
}

module.exports = defineConfig({
   viewportWidth: 1440,
   viewportHeight: 768,
   chromeWebSecurity: false,
   screenshotOnRunFailure:true,
   projectId: "x76mqo",
   screenshotsFolder:'mochawesome-report/assests',
   "reporter": "cypress-mochawesome-reporter",
   "reporterOptions": {
    "reporterEnabled":"mochawesome",
    "mochawesomeReporteroptions":{
      "charts":"true",
      "reportDir": 'cypress/reports/mochawesome-report',
      "reportFilename": 'report',
      "overwrite": false,
      "html": true,
      "json": true,
      "quiet":true,
    },
  },
  
    env: {
    MAILOSAUR_API_KEY: "DAe2srWZX2Us3ShX",
      MAILOSAUR_BASE_URL:"https://mailosaur.com/",
    },

  e2e: {
    baseUrl: 'https://www.dragonshield.com', 
    excludeSpecPattern: "e2e/**/*.js",
    specPattern: "cypress/TestArcanetinmen/*.js",
    "pageLoadTimeout":80000,
    //"retries": 1
  
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    }
  
  
});
