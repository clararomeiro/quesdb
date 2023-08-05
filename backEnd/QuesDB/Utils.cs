using QuesDB.Domain.Contracts.Requests;

namespace QuesDB
{
    public class Utils
    {

        public static string parseFormulario(FormularioRequest formulario)
        {
            string text = "Crie uma prova de " + formulario.Materia + " para alunos do " + formulario.Ano +
                " do ensino " + formulario.Nivel + " com " + formulario.QtdQuestoes + " questões " + formulario.Questoes + " sobre " + formulario.Assunto
                + " Retorne no formato JSON com os seguintes atributos: \n -questoes: a lista de questões; \n -cada questão terá: \n\t -enunciado com uma história que se relacione à pergunta da questão; \n\t -resposta correta;  ";

            if(formulario.Questoes != Domain.Enum.TipoQuestoes.Aberta)
            {
                text += "\n\t -opções (a, b, c, d, e);";
            }

            if (formulario.Observacao != null)
            {
                text += " (" + formulario.Observacao + ")";
            }

            return text;
        }

        public static string getAPIKey()
        {
            string key = File.ReadAllText("config/APIKEY.txt");
            return key;
        }
    }
}