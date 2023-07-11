using Microsoft.EntityFrameworkCore;
using QuesDB.Domain.Entities;
using QuesDB.Domain.Interfaces;

namespace QuesDB.Infrastructure.Repository
{
    public class RepositorioFormulario : IRepositorioFormulario
    {
        private readonly DbContextOptions<ContextBase> _OptionsBuilder;

        public RepositorioFormulario()
        {
            _OptionsBuilder = new DbContextOptions<ContextBase>();
        }

        public async Task<Formulario> CreateAsync(Formulario formulario)
        {
            using (var data = new ContextBase(_OptionsBuilder))
            {
                var result = await data.Set<Formulario>().AddAsync(formulario);
                await data.SaveChangesAsync();
                return formulario;
            }
        }
    }
}
