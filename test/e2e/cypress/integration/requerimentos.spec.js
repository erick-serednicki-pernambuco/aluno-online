describe('Funcionalidade Requerimentos', () => {
  beforeEach(() => {
    cy.visit('/requerimentos');
  });

  it('Exibe a lista de requerimentos corretamente', () => {
    cy.get('.requerimentos-lista')
      .should('exist')
      .find('.requerimento-item')
      .should('have.length', 3); // Verifique o número de requerimentos exibidos
  });

  it('Redireciona para a página de criação de requerimentos', () => {
    cy.contains('Novo Requerimento').click();
    cy.url().should('include', '/requerimentos/novo');
    cy.get('.formulario-novo-requerimento').should('exist');
  });

  it('Cria um novo requerimento com sucesso', () => {
    cy.contains('Novo Requerimento').click();
    cy.url().should('include', '/requerimentos/novo');
    cy.get('#disciplina').select('Matemática');
    cy.get('#prova').type('Prova 1');
    cy.get('#argumentacao').type('Justificativa do requerimento');
    cy.get('form').submit();
    cy.url().should('include', '/requerimentos');
    cy.get('.requerimentos-lista')
      .find('.requerimento-item')
      .should('have.length', 4); // Verifique se um novo requerimento foi adicionado
  });
});
