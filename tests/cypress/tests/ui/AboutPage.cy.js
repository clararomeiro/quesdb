/// <reference types="cypress" />

describe("Main Page", () => {
  beforeEach(() => {
    cy.visit("/sobre");
  });

  it("About page should be displayed", () => {
    cy.get(".MuiCardContent-root").should(
      "have.text",
      "O QuesDB é um projeto feito por alunos de Computação para faciliar a criação de provas para professores e para alunos que precisam de desejam testar seu conhecimento. Projetado na cadeira de desenvolvimento web, o projeto ainda está em desenvolvimento."
    );
  });
});
