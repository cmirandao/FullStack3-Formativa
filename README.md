# Proyecto FullStack 3: Sistema Integral de Biblioteca (Microservicios & Angular)

Repositorio oficial correspondiente a la asignatura **Desarrollo FullStack 3**. Este proyecto implementa una solución full-stack basada en un microservicio backend desacoplado con Spring Boot y una aplicación web moderna en Angular, conectada de forma segura a una base de datos relacional.

---

## Arquitectura del Sistema

El sistema se divide en dos módulos independientes ubicados en la raíz del repositorio:

1. **`biblio` (Backend - Puerto `8080`)**:
   - Microservicio desarrollado en **Spring Boot 3.3.5** y **Java 21**.
   - Expone una API REST completa para la gestión y persistencia de libros mediante **Spring Data JPA** y un motor de base de datos relacional (Oracle).

2. **`biblio-frontend` (Frontend - Puerto `4200`)**:
   - Aplicación web de una sola página (SPA) desarrollada en **Angular**.
   - Implementa patrones de diseño como **Singleton** y **Observer** (vía RxJS y `HttpClient`) para consumir los endpoints del microservicio de forma reactiva y asíncrona.

---

## Stack Tecnológico

- **Backend:** Java 21, Spring Boot 3.3.5, Spring Data JPA, Maven.
- **Frontend:** Angular, TypeScript, RxJS, Bootstrap / CSS.
- **Base de Datos:** Oracle Database (Driver JDBC `ojdbc11`).
- **Control de Versiones:** Git / GitHub (Estrategia modular y changelogs).

---

## Estructura del Repositorio

```text
    FullStack3-Formativa/
    │
    ├── biblio/                  # Microservicio Backend (Spring Boot)
    │   ├── src/
    │   ├── pom.xml
    │   ├── mvnw
    │   └── script_bd.sql        # Script SQL de inicialización de la tabla de libros
    │
    ├── biblio-frontend/         # Aplicación Web (Angular)
    │   ├── src/
    │   ├── angular.json
    │   └── package.json
    │
    └── README.md                # Documentación principal del repositorio (este archivo)
```

---

## Guía de Ejecución Local

Para levantar el sistema completo en tu entorno de desarrollo local, sigue estos pasos:

**Paso 1: Configurar la Base de Datos**

- Ejecuta el script de creación de la tabla y datos iniciales ubicado en el archivo `biblio/script_bd.sql` dentro de tu gestor de base de datos Oracle.

**Paso 2: Ejecutar el Backend (Spring Boot)**

- Abre una terminal y navega a la carpeta del microservicio:
```Bash
cd FullStack3-Formativa/biblio
```
- Verifica o ajusta las credenciales de conexión en `src/main/resources/application.properties`.

- Ejecuta el proyecto mediante Maven:

```Bash
.\mvnw spring-boot:run
```
(El backend quedará activo en `http://localhost:8080/api/libros`)

**Paso 3: Ejecutar el Frontend (Angular)**

- Abre una nueva ventana de terminal y navega hasta la carpeta del cliente web:
```Bash
cd FullStack3-Formativa/biblio-frontend
```

- Instala las dependencias del proyecto (solo la primera vez):
```Bash
npm install
```
- Inicia el servidor de desarrollo de Angular:
```Bash
ng serve
```
Abre tu navegador web e ingresa a: `http://localhost:4200/`
