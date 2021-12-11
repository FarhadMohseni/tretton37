/// <reference types="cypress"

context("Filters", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should filter employees by name", () => {
    cy.get("[data-cy=filterByName]").type("Ahmad");
    cy.get("[data-cy=dataName]").should("have.text", "Ahmad Mirzaei");
  });
  it("Should filter employees by office", () => {
    cy.get("[data-cy=selectOffice]").select("Stockholm");
    cy.get("[data-cy=dataOffice]").each(($el, index, $list) => {
      expect($el).to.contain("Stockholm");
    });
  });
});

export {};
