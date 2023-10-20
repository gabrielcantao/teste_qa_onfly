
Cypress.Commands.add('espera_elemento', (elemento) => {
  cy.get(elemento)
    .should('be.visible')
});

Cypress.Commands.add('login', (nome, senha)  => {
  cy.get('.fa.fa-user')
    .click()
  cy.get('.account_form')
    .should('be.visible')
  cy.get('#user')
    .type(nome + '@teste.com')
  cy.get('#password')
    .type('senha' + senha)
  cy.get('#btnLogin')
    .click(); 
  cy.get('.swal2-confirm.swal2-styled')
    .click(); 
});