using AutoMapper;
using Moq;
using QuesDB.Controllers;
using QuesDB.Domain.Contracts.Requests;
using QuesDB.Domain.Entities;
using QuesDB.Domain.Interfaces;
using Xunit;

namespace QuesDB.Test
{
    public class ControllerTest
    {
        private readonly Mock<IRepositorioFormulario> _mockRepositorioFormulario;
        private readonly Mock<IMapper> _mockMapper;
        private readonly FormularioController _controller;

        public FormularioControllerTests()
        {
            _mockRepositorioFormulario = new Mock<IRepositorioFormulario>();
            _mockMapper = new Mock<IMapper>();
            _controller = new FormularioController(_mockRepositorioFormulario.Object, _mockMapper.Object);
        }

        [Fact]
        public async Task AdicionarFormulario_WithValidFormulario_ShouldReturnOkResult()
        {
            // Arrange
            var formularioRequest = new FormularioRequest
            {
                // Set the properties of the formularioRequest
            };

            var chatResponse = new ChatResponse
            {
                Choices = new[]
                {
                    new ChatChoice
                    {
                        Message = new ChatMessageContent
                        {
                            Content = "Your JSON response here"
                        }
                    }
                }
            };

            _mockMapper.Setup(m => m.Map<Formulario>(It.IsAny<FormularioRequest>())).Returns(new Formulario());
            _mockRepositorioFormulario.Setup(r => r.CreateAsync(It.IsAny<Formulario>())).ReturnsAsync(new Formulario());
            _controller.Utils = new Utils(); // You may need to set the Utils instance in your controller for testing.

            var openaiMock = new Mock<IOpenAIAPI>();
            openaiMock.Setup(o => o.Chat.CreateChatCompletionAsync(It.IsAny<ChatRequest>()))
                      .ReturnsAsync(chatResponse);

            // Act
            var result = await _controller.AdicionarFormulario(formularioRequest);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var questoesDtoResponse = Assert.IsType<QuestoesDtoResponse>(okResult.Value);
            // Add additional assertions as needed
        }
    }
}
