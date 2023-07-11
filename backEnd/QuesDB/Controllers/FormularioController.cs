using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using QuesDB.Domain.Contracts.Requests;
using QuesDB.Domain.Entities;
using QuesDB.Domain.Interfaces;

namespace QuesDB.Controllers
{
    [Route("QuesDB/[controller]")]
    public class FormularioController : ControllerBase
    {
        private readonly IRepositorioFormulario repositorioFormulario;
        private readonly IMapper mapper;

        public FormularioController(IRepositorioFormulario _repositorioFormulario, IMapper _mapper)
        {
            repositorioFormulario = _repositorioFormulario;
            mapper = _mapper;
        }

        [Produces("application/json")]
        [HttpPost("/criarFormulario")]
        public async Task<IActionResult> AdicionarFormulario (FormularioRequest formulario)
        {
            if(formulario == null)
            {
                return BadRequest();
            }
            var formularioMap = mapper.Map<Formulario>(formulario);
            var criarFormulario = await repositorioFormulario.CreateAsync(formularioMap);

            if(criarFormulario == null)
            {
                return BadRequest();
            }

            return Ok(formulario);
        }
    }
}
