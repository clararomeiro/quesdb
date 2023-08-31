namespace QuesDB.Domain.Contracts.Responses
{
    public class FormularioDtoResponse
    {
        public string Enunciado { get; set; }
        public string Resposta_Correta { get; set; }
        public List<string> Opcoes { get; set; }
    }
}
