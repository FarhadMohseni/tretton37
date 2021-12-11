/// <reference types="cypress"/>

context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should render the home page correctly", () => {
    cy.get("[data-cy=homeText]").contains("tretton37");
  });
  it("Should render the data", () => {
    cy.get("[data-cy=dataItem]").should("be.visible");
  });
  it("Should render the initial 10 entries", () => {
    cy.get("[data-cy=items]")
      .find("[data-cy=dataItem]")
      .should("have.length", 10);
  });
  it("Should load more data when scrolling to the bottom", () => {
    cy.scrollTo("bottom");
    cy.get("[data-cy=items]")
      .find("[data-cy=dataItem]")
      .should("have.length", 20);
  });
});

export {};
