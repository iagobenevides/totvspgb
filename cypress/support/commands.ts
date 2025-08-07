// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login
       * @example cy.login('email@example.com', 'password')
       */
      login(email: string, password: string): Chainable<void>
      
      /**
       * Custom command to drag an element
       * @example cy.get('.draggable').drag('.target')
       */
      drag(target: string): Chainable<void>
      
      /**
       * Custom command to dismiss dialogs
       * @example cy.dismiss()
       */
      dismiss(): Chainable<void>
    }
  }
}
