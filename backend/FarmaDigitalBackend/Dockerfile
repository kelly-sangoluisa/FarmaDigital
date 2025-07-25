﻿# ✅ Argumentos de compilación
ARG BACKEND_PORT=5245
ARG BACKEND_HTTPS_PORT=7053

# Base de ejecución (runtime)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE ${BACKEND_PORT}
EXPOSE ${BACKEND_HTTPS_PORT}
# 👉 Exponemos también el puerto que usa Railway
EXPOSE 8080

# Etapa de compilación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copiar el archivo .csproj y restaurar dependencias
COPY FarmaDigitalBackend.csproj ./
RUN dotnet restore

# Copiar todo el contenido del proyecto
COPY . ./

# Compilar el proyecto
RUN dotnet build "FarmaDigitalBackend.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Etapa de publicación
FROM build AS publish
RUN dotnet publish "FarmaDigitalBackend.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Imagen final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "FarmaDigitalBackend.dll"]
