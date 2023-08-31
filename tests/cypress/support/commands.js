Cypress.Commands.add(
  "fillForm",
  (materia, assunto, nivel, ano, questoes, qtdQuestoes, obs = null) => {
    cy.contains("main .MuiBox-root > h6", "Matéria").find("+ div input").type(materia);
    cy.contains("main .MuiBox-root > h6", "Assunto").find("+ div input").type(assunto);

    cy.get("#mui-component-select-Nivel").click();
    cy.contains(".MuiMenu-list > li", nivel).click();

    cy.get("#mui-component-select-Ano").click();
    cy.contains(".MuiMenu-list > li", ano).click();

    cy.get("#mui-component-select-Questoes").click();
    cy.contains(".MuiMenu-list > li", questoes).click();

    cy.contains("main .MuiBox-root > h6", "Quantidade de questões")
      .find("+ div input")
      .type(qtdQuestoes);

    if (obs !== null) {
      cy.contains("main .MuiBox-root > h6", "Observação").find("+ div input").type(obs);
    }
  }
);
