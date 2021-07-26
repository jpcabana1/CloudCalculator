# CloudCalculator

React + .NET Core + SQL Server WebApp

### .NET commands:

##### dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design

##### dotnet add package Microsoft.EntityFrameworkCore.SqlServer

##### dotnet add package Microsoft.EntityFrameworkCore.Design

##### dotnet add package Microsoft.EntityFrameworkCore.Tools

##### dotnet tool install --global dotnet-aspnet-codegenerator

##### dotnet tool update -g Dotnet-aspnet-codegenerator

##### dotnet ef migrations add DatabaseOperations

##### dotnet ef database update

##### dotnet aspnet-codegenerator controller -name OperationController -async -api -m Operation -dc OperationContext -outDir Controllers

##### dotnet add package FakeItEasy --version 7.1.0

## Startup.cs

- #### services.AddDbContext<OperationContext>(opt =>opt.UseSqlServer(Configuration.GetConnectionString("OperationAPIContext")));

## Docker SQL Server

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=C@lcP@55" -p 1401:1433 --name sqlServer -d mcr.microsoft.com/mssql/server:2019-latest
docker build -t calc/jpcabana1 -f Dockerfile .

OBS: Foi necessário atualizar o banco(dotnet ef database update) em "localhost, 1402".
Em seguida mudei para para "db" a connectionString.
