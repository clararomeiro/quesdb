using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using QuesDB.Domain.Contracts.Requests;
using QuesDB.Domain.Entities;
using QuesDB.Domain.Interfaces;
using OpenAI_API.Chat;
using OpenAI_API;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text.Json.Nodes;
using QuesDB.Domain.Contracts.Responses;

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
            string APIKey = Utils.getAPIKey();
            string answer = string.Empty;

            if (formulario == null)
            {
                return BadRequest();
            }
            var formularioMap = mapper.Map<Formulario>(formulario);
            //var criarFormulario = await repositorioFormulario.CreateAsync(formularioMap);

            /*if(criarFormulario == null)
            {
                return BadRequest();
            }*/

            var openai = new OpenAIAPI(APIKey);
            ChatRequest completion = new ChatRequest();
            ChatMessageRole role = ChatMessageRole.User;
            completion.Messages = new ChatMessage[] { new ChatMessage(role, Utils.parseFormulario(formulario)) };
            completion.Model = OpenAI_API.Models.Model.ChatGPTTurbo;
            completion.MaxTokens = 1000;
            completion.Temperature = 0;

            var result = await openai.Chat.CreateChatCompletionAsync(completion);
            

            foreach (var item in result.Choices)
            {
                answer = item.Message.Content;
                string updatedAnswer = answer.Replace("resposta_Correta", "resposta_correta");

                QuestoesDtoResponse questoesDTO = JsonConvert.DeserializeObject<QuestoesDtoResponse>(answer);

                
                Console.WriteLine(questoesDTO);
                return Ok(questoesDTO);
            }

            return BadRequest();
        }

    }
}
