# FROM mcr.microsoft.com/dotnet/aspnet:5.0
# COPY bin/Release/net5.0/publish/ App/
# WORKDIR /App
# ENTRYPOINT ["dotnet", "calc.dll"]

# ENV DOTNET_EnableDiagnostics=0
FROM mcr.microsoft.com/dotnet/sdk:5.0
ENV PATH $PATH:/root/.dotnet/tools
RUN dotnet tool install -g dotnet-ef --version 5.0.8
COPY . /app
WORKDIR /app
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80 
RUN chmod +x ./entrypoint.sh
CMD /bin/bash ./entrypoint.sh
