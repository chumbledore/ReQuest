using System.Collections.Generic;
using Database;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using App.Core;
using App.Tickets;

namespace API.Extensions
{
    public static class ServicesManagerExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services,
             IConfiguration config)
            {
                    services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                });

                // Adding EF Core, using SQLite
                services.AddDbContext<DataContext>(opt =>
                {
                    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                });

                //CORS policy to allow development interaction between front and backend
                services.AddCors(opt => 
                {
                    opt.AddPolicy("CorsPolicy", policy => 
                    {
                        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                    });
                });

                //Initializing MediatR
                services.AddMediatR(typeof(List.Handler).Assembly);

                //Initializing AutoMapper
                services.AddAutoMapper(typeof(TicketProfiles).Assembly);

                return services;
            }
    }
}