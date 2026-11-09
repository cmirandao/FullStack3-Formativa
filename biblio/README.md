# Microservicio Backend - Biblioteca (Spring Boot)

Microservicio desarrollado en **Spring Boot 3.3.5** y **Java 21**, encargado de la lógica de negocio y la persistencia de datos de la biblioteca utilizando **Spring Data JPA** y una base de datos **Oracle**.

## Tecnologías del Stack
- **Backend:** Java 21, Spring Boot 3.3.5
- **Persistencia:** Spring Data JPA / Hibernate
- **Base de Datos:** Oracle Cloud Autonomous Database (Conectada mediante Wallet de seguridad y controlador `ojdbc11`)

---

## Instrucciones para Levantar el Servicio

### Prerrequisitos
- Tener instalado **Java JDK 21** en tu equipo.
- Tener configurada y corriendo la base de datos **Oracle** (ej. Oracle XE o instancia local) ejecutando el script `script_bd.sql` proporcionado en el repositorio.

### Pasos de ejecución
1. Clona el repositorio y navega hasta la carpeta del microservicio:
```bash
   cd FullStack3-Formativa/biblio
   ```
 
2. Configura las credenciales de tu base de datos Oracle en el archivo ```bash src/main/resources/application.properties```:
```bash
    spring.datasource.url=jdbc:oracle:thin:@dbform_high?TNS_ADMIN=./Wallet_dbForm
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
```

3. Compila y ejecuta el proyecto utilizando el wrapper de Maven:
```bash
    .\mvnw spring-boot:run
```
El microservicio se iniciará por defecto en el puerto 8080[cite: 1]. Puedes probar los endpoints REST base en: ```bash http://localhost:8080/api/libros ```.
