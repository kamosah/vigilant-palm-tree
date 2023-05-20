describe('primo-ui: PrimoUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=primoui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to PrimoUi!');
  });
});
