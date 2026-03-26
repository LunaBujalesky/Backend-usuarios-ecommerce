# Backend-usuarios-ecommerce
 Desarrollo de entorno de e-commerce con CRUD de usuarios, junto con un sistema de Autenticación y Autorización.
Se implementó una arquitectura en capas utilizando DAO, Repository y DTO para separar responsabilidades.
Se agregó autenticación con JWT y Passport, junto con middleware de autorización por roles (user/admin).
Se desarrolló un sistema de recuperación de contraseña con expiración de token de 1 hora.
Además, se mejoró la lógica de compra generando tickets en base al stock disponible.

### Configuración del proyecto
1 Clonar el repo
2 Crear un archivo .env basado en .env.example
3 Completar variables:
MONGO_URL=tu_string_de_mongodb
JWT_SECRET=tu_secret
4 instala dependencias
5 npm run dev

### Ejemplo de uso

Registrar usuario:

POST /api/sessions/register
{
  "email": "usuarioprueba@email.com",
  "password": "123456"
}