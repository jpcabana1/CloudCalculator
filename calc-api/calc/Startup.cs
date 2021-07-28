using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using calc.Models;
using Microsoft.EntityFrameworkCore;

namespace calc
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            #region "development"
            var connection_dev = @"Server=localhost, 1403;Database=Operations;User Id=sa;Password=C@lcP@55D3v;";
            Console.WriteLine(connection_dev);
            services.AddDbContext<OperationContext>(opt => opt.UseSqlServer(connection_dev));
            #endregion

            #region "production"
            // var connection = @"Server=db;Database=Operations;User Id=sa;Password=C@lcP@55;";
            // Console.WriteLine(connection);
            // services.AddDbContext<OperationContext>(opt => opt.UseSqlServer(connection));
            #endregion

            //services.AddDbContext<OperationContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("OperationAPIContext")));

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "calc", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "calc v1"));
            }

            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
