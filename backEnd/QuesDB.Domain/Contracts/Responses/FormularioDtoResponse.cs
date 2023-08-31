namespace QuesDB.Domain.Contracts.Responses
{
    public class FormularioDtoResponse
    {
        public string Enunciado { get; set; }
        public string Resposta_correta { get; set; }
        public OpcoesDto Opcoes { get; set; }
    }

    public class OpcoesDto
    {
        public string a { get; set; }
        public string b { get; set; }
        public string c { get; set; }
        public string d { get; set; }
        public string e { get; set; }
    }
}
