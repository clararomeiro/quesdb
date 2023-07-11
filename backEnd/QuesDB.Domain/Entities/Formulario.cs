using QuesDB.Domain.Enum;
using System.ComponentModel.DataAnnotations;

namespace QuesDB.Domain.Entities
{
    public class Formulario
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Assunto { get; set; }

        [Required]
        public TipoQuestoes Questoes { get; set; }

        [Required]
        public int QtdQuestoes { get; set; }

    }
}
