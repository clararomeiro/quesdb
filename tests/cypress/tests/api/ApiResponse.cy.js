/// <reference types="cypress" />

describe("Main Page", () => {
  it("Open-ended should be correct", () => {
    cy.api({
      url: "https://localhost:7259/criarFormulario",
      method: "POST",
      headers: {
        accept: "*/*",
      },
      qs: {
        Materia: "Matematica",
        Assunto: "Frações",
        Ano: "2",
        Nivel: "Medio",
        Questoes: "0",
        QtdQuestoes: "2",
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.questoes).to.have.length(2);
      expect(response.body.questoes[0].opcoes).to.be.null;
    });
  });

  it("Close-ended should be correct", () => {
    cy.api({
      url: "https://localhost:7259/criarFormulario",
      method: "POST",
      headers: {
        accept: "*/*",
      },
      qs: {
        Materia: "Matematica",
        Assunto: "Frações",
        Ano: "2",
        Nivel: "Medio",
        Questoes: "1",
        QtdQuestoes: "2",
      },
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.questoes).to.have.length(2);
      expect(response.body.questoes[0].opcoes).to.have.keys(["a", "b", "c", "d", "e"]);
    });
  });

  const numQuestions = [1, 2, 3, 4, 5, 6];

  numQuestions.forEach((num) => {
    it.skip(`Response should have length ${num}`, () => {
      cy.api({
        url: "https://localhost:7259/criarFormulario",
        method: "POST",
        headers: {
          accept: "*/*",
        },
        qs: {
          Materia: "Matematica",
          Assunto: "Frações",
          Ano: "2",
          Nivel: "Medio",
          Questoes: "0",
          QtdQuestoes: num,
        },
      }).then((response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body.questoes).to.have.length(num);
      });
    });
  });
});
