using crud_ReactJs_Asp.Net.Data.Context;
using crud_ReactJs_Asp.Net.Data.Repositories;
using crud_ReactJs_Asp.Net.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();
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
var env = builder.Environment.ContentRootPath;
app.UseStaticFiles(new StaticFileOptions {
    FileProvider = new PhysicalFileProvider(Path.Combine(env, "Images")),
    RequestPath = "/Images"
});
app.UseHttpsRedirection();
app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());
app.UseAuthorization();

app.MapControllers();

app.Run();
