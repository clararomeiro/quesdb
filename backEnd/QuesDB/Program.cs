using AutoMapper;
using Microsoft.EntityFrameworkCore;
using QuesDB.Domain.Contracts.Requests;
using QuesDB.Domain.Entities;
using QuesDB.Domain.Interfaces;
using QuesDB.Infrastructure;
using QuesDB.Infrastructure.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Config Services
builder.Services.AddDbContext<ContextBase>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// INTERFACE E REPOSITORIO
builder.Services.AddScoped<IRepositorioFormulario, RepositorioFormulario>();

var config = new AutoMapper.MapperConfiguration(cfg =>
{
    cfg.CreateMap<FormularioRequest, Formulario>();
    cfg.CreateMap<Formulario, FormularioRequest>();
});

IMapper mapper = config.CreateMapper();
builder.Services.AddSingleton(mapper);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
