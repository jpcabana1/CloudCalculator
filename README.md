# CloudCalculator

React + .NET Core + SQL Server WebApp

## .NET commands:

- dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer
- dotnet add package Microsoft.EntityFrameworkCore.Design
- dotnet add package Microsoft.EntityFrameworkCore.Tools
- dotnet tool install --global dotnet-aspnet-codegenerator
- dotnet tool update -g Dotnet-aspnet-codegenerator

# OBS: Lembrar de configurar o Startup.cs

- dotnet aspnet-codegenerator controller -name OperationController -async -api -m Operation -dc OperationContext -outDir Controllers

# Docker SQL Server

- docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=_{password}_" -p 1401:1433 --name sqlServer -d mcr.microsoft.com/mssql/server:2019-latest
