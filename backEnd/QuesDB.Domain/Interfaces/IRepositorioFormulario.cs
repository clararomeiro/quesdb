using QuesDB.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuesDB.Domain.Interfaces
{
    public interface IRepositorioFormulario
    {
        Task<Formulario> CreateAsync(Formulario formulario);
    }
}
