/// <reference types="cypress" />

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("App Bar should be displayed", () => {
    cy.get("nav .MuiToolbar-root .MuiTypography-root").should("have.text", "QuesDB");

    const navButtons = ["Home", "Sobre", "Teste"];
    cy.get("nav .MuiToolbar-root .MuiBox-root > button")
      .should("have.length", 3)
      .each(($el, index) => {
        expect($el.text()).to.equal(navButtons[index]);
      });
  });

  it("Main Content should be displayed", () => {
    cy.get("main .MuiBox-root > h1").should(
      "have.text",
      "Descubra um novo jeito de criar suas provas"
    );

    cy.get("main .MuiBox-root > button").should("have.text", "Começar");
  });

  it("Nav buttons should be working", () => {
    cy.get("nav .MuiToolbar-root .MuiBox-root > button")
      .eq(0)
      .click()
      .then(() => {
        cy.url().should("equal", Cypress.config("baseUrl") + "/");
      });

    cy.get("nav .MuiToolbar-root .MuiBox-root > button")
      .eq(1)
      .click()
      .then(() => {
        cy.url().should("equal", Cypress.config("baseUrl") + "/sobre");
      });

    cy.get("nav .MuiToolbar-root .MuiBox-root > button")
      .eq(2)
      .click()
      .then(() => {
        cy.url().should("equal", Cypress.config("baseUrl") + "/teste");
      });
  });

  it("Main button should be working", () => {
    cy.get("main .MuiBox-root > button").should("have.text", "Começar").click();

    cy.url().should("equal", Cypress.config("baseUrl") + "/teste");
  });
});
