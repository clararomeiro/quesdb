using QuesDB.Domain.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuesDB.Domain.Contracts.Requests
{
    public class FormularioRequest
    {

        [Required]
        public string Materia { get; set; }

        [Required]
        public string Assunto { get; set; }

        [Required]
        public int Ano { get; set; }

        [Required]
        public Nivel Nivel { get; set; }

        [Required]
        public TipoQuestoes Questoes { get; set; }

        [Required]
        public int QtdQuestoes { get; set; }

        public string Observacao { get; set; }
    }
}
