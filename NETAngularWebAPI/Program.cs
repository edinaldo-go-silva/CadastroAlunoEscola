using NETAngularWebAPI;
using NETAngularWebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IAlunoService, AlunoService>();
builder.Services.AddScoped<IEscolaService, EscolaService>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin
    .AllowCredentials()); // allow credentials

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCookiePolicy();
app.UseStaticFiles();

app.MapControllers();
app.Run();
