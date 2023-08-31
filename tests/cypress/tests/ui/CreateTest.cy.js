/// <reference types="cypress" />

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("/teste");
  });

  it("Closed-ended questions", () => {
    cy.fillForm("Matématica", "Fração", "Ensino Fundamental I", "1º ano", "Fechadas", 2);

    cy.get("main .MuiBox-root > button").click();

    cy.get("main > div > .MuiPaper-root")
      .as("testBody")
      .find("h5")
      .should("have.length", 2);

    cy.get("@testBody").find(".MuiCardContent-root > p").should("have.length", 10);

    cy.get(".MuiButtonBase-root.MuiAccordionSummary-root")
      .should("have.length", 2)
      .each(($ans) => {
        cy.wrap($ans).click();
        cy.wrap($ans)
          .find("+ div .MuiAccordionDetails-root")
          .should("be.visible")
          .should("not.be.empty");
      });
  });

  it("Open-ended questions", () => {
    cy.fillForm("Matématica", "Fração", "Ensino Fundamental I", "1º ano", "Abertas", 2);

    cy.get("main .MuiBox-root > button").click();

    cy.get("main > div > .MuiPaper-root")
      .as("testBody")
      .find("h5")
      .should("have.length", 2);

    cy.get("@testBody").find(".MuiCardContent-root > p").should("not.exist");

    cy.get(".MuiButtonBase-root.MuiAccordionSummary-root")
      .should("have.length", 2)
      .each(($ans) => {
        cy.wrap($ans).click();
        cy.wrap($ans)
          .find("+ div .MuiAccordionDetails-root")
          .should("be.visible")
          .should("not.be.empty");
      });
  });

  it("Select New Test", () => {
    cy.fillForm("Matématica", "Fração", "Ensino Fundamental I", "1º ano", "Abertas", 2);
    cy.get("main .MuiBox-root > button").click();

    cy.contains("main .MuiButtonBase-root", "Novo teste").click();

    cy.get("main .MuiBox-root > h6").should("exist");
  });
});
