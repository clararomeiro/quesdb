using QuesDB.Domain.Contracts.Requests;

namespace QuesDB
{
    public class Utils
    {

        public static string parseFormulario(FormularioRequest formulario)
        {
            string text = "Crie uma prova de " + formulario.Materia + " para alunos do " + formulario.Ano +
                " do " + formulario.Nivel + " com " + formulario.QtdQuestoes + " questões " + formulario.Questoes + " sobre " + formulario.Assunto;

            if (formulario.Observacao != null)
            {
                text += " (" + formulario.Observacao + ")";
            }

            return text;
        }
    }
}
