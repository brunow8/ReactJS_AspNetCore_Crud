using crud_ReactJs_Asp.Net.Data.Context;
using crud_ReactJs_Asp.Net.Data.Repositories;
using crud_ReactJs_Asp.Net.Interfaces.Repositories;
using crud_ReactJs_Asp.Net.Interfaces.Services;
using crud_ReactJs_Asp.Net.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Implement interfaces
builder.Services.AddTransient<IPersonService, PersonService>();
builder.Services.AddTransient<IPersonRepo, PersonRepo>();

//Through the default connection of appsettings it's possible to make the connection to the database
string mySqlConnection = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContextPool<ApplicationDbContext>(options => options.UseMySql(mySqlConnection, ServerVersion.AutoDetect(mySqlConnection)));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
