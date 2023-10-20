describe('Teste Técncico Onfly', () => {

  //String aleatoria
  const uuid = () => Cypress._.random(0, 1e6)
  const id = uuid()
  const testname = `testname${id}`
  const num = id

  context('Cadastro', () => {
    
    beforeEach(() => 
      cy.visit('/'));

    it('Cadastro com Sucesso', () => {
      //Clicar botão cadastro
      cy.get('.fa.fa-lock')
        .click() 
  
      //Aguardar carregamento da tela
      cy.espera_elemento('.account_form')
      
      //Preencher campos de cadastro
      cy.get('#user')
        .type(testname)
      cy.get('#email')
        .type(testname + '@teste.com')
      cy.get('#password')
        .type('senha' + testname)
  
      //Clicar botão cadastrar
      cy.get('#btnRegister')
        .click();
  
      //Validação de cadastro com sucesso  
      cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')
    })
  
    it('Login com Sucesso', () => {
      //Clicar em Login
      cy.get('.fa.fa-user')
        .click()
  
      //Aguardar carregamento da tela
      cy.espera_elemento('.account_form')
      
      //Preencher campos de login
      cy.get('#user')
        .type(testname + '@teste.com')
      cy.get('#password')
        .type('senha' + testname)
  
      //Clicar botão login
      cy.get('#btnLogin')
        .click(); 
    
      //Validação de login com sucesso  
      cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado')
    })
  
    it('Logout com Sucesso', () => {
      //Realizar login
      cy.login(testname , testname)
      
      //Clicar em lougout
      cy.get('.nav > :nth-child(6) > a')
        .click(); 
  
      //Validação de logout com sucesso  
      cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Logout Sucessfull')
    })
  })

  context('Compra', () => {
    
    beforeEach(() => 
      cy.visit('/'));

    it('Adicionar produto ao carrinho', () => {
      //Selecionar Produto
      cy.get('#video > .row > :nth-child(1) > .product_item_two > .product_detail > .product_title > a')
      .click()

      //Clicar em add to cart
      cy.get('.theme-btn-one.btn-black-overlay.btn_sm')
      .click()

      //Validação de produto adicionado
      cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Sucess!')
    })

    it('Finalizar compra', () => {
      //Clicar em carrinho
      cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa')
      .click()

      //Clicar em checkout
      cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one')
      .click()

      //Preencher campos de compra
      cy.get('#fname')
        .type('primeiro ' + testname)
      cy.get('#lname')
        .type('ultimo ' + testname)
      cy.get('#cname')
        .type('empresa ' + testname)
      cy.get('#email')
        .type(testname + '@teste.com')
      
      cy.get('select[id="country"]').select('usa')
      
      cy.get('select[id="city"]').select('Aland Islands')
      cy.get('#zip')
        .type(num)
      cy.get('#faddress')
        .type('endereco ' + testname)
      cy.get('#messages')
        .type('observacao ' + testname)
      
      //Clicar em save
      cy.get('.checkout-area-bg > .theme-btn-one')
        .click()


      //Clicar em place order
      cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one')
        .click()

      //Validação de produto adicionado
      cy.get('.offer_modal_left')
        .should('be.visible')
      cy.get('h2')
        .should('have.text', 'Order success!')
    })
  })
})