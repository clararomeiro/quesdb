/// <reference types="cypress" />

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("/teste");
  });

  it("Fields should be displayed", () => {
    const fields = [
      "Matéria:",
      "Assunto:",
      "Nível:",
      "Ano:",
      "Tipo de questões:",
      "Quantidade de questões:",
      "Observação:",
    ];
    cy.get("main .MuiBox-root > h6")
      .should("have.length", fields.length)
      .each(($el, index) => {
        cy.wrap($el).should("have.text", fields[index]);
      });
  });

  it("Button should be displayed", () => {
    cy.get("main .MuiBox-root > button")
      .should("have.text", "Enviar")
      .should("be.disabled");
  });

  it("Select Ensino Fundamental I", () => {
    cy.get("#mui-component-select-Nivel").click();
    cy.contains(".MuiMenu-list > li", "Ensino Fundamental I").click();

    cy.get("#mui-component-select-Ano").click();

    const anoOptions = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"];
    cy.get(".MuiMenu-list > li")
      .should("have.length", 5)
      .each(($el, index) => {
        cy.wrap($el).should("have.text", anoOptions[index]);
      });
  });

  it("Select Ensino Fundamental II", () => {
    cy.get("#mui-component-select-Nivel").click();
    cy.contains(".MuiMenu-list > li", "Ensino Fundamental II").click();

    cy.get("#mui-component-select-Ano").click();

    const anoOptions = ["6º ano", "7º ano", "8º ano", "9º ano"];
    cy.get(".MuiMenu-list > li")
      .should("have.length", 4)
      .each(($el, index) => {
        cy.wrap($el).should("have.text", anoOptions[index]);
      });
  });

  it("Select Ensino Médio", () => {
    cy.get("#mui-component-select-Nivel").click();
    cy.contains(".MuiMenu-list > li", "Ensino médio").click();

    cy.get("#mui-component-select-Ano").click();

    const anoOptions = ["1º ano", "2º ano", "3º ano"];
    cy.get(".MuiMenu-list > li")
      .should("have.length", 3)
      .each(($el, index) => {
        cy.wrap($el).should("have.text", anoOptions[index]);
      });
  });

  it("Fill form", () => {
    cy.fillForm("Matématica", "Fração", "Ensino Fundamental I", "1º ano", "Abertas", 2);

    cy.get("main .MuiBox-root > button")
      .should("have.text", "Enviar")
      .should("not.be.disabled");
  });
});
