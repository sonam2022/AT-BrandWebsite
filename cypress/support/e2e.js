// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import {faker} from '@faker-js/faker';
// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-v10-preserve-cookie';
import commonjs from '@rollup/plugin-commonjs';

require('date-and-time')

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
  });
  import 'cypress-iframe';
import 'cypress-mailosaur';
import 'cypress-promise/register';
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath');
import 'cypress-file-upload';


// Alternatively you can use CommonJS syntax:
// require('./commands')
//Add Screenshot On Failure
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {  
    if (test.state === "failed") {    
      const screenshot       =`assets/${Cypress.spec.name}/${runnable.parent.title} --       ${test.title} (failed).png`;    
  addContext({ test }, screenshot);  
    }
  });

  Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});

Cypress.on("window:before:load", window => {
  window.document.cookie = `${PHPSESSID}=${"77hfvk2s18n4j19khfq97624gd"}`;
});
