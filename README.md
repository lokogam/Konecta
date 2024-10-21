Entiendo que quieres un ejemplo similar para tu proyecto Konecta. Basándome en la información que has proporcionado, aquí tienes un ejemplo de cómo podría ser el README para tu proyecto:

```markdown
# Konecta Bank App

## Descripción del Proyecto

Konecta Bank App es una aplicación web para la venta de productos financieros de un banco. Permite a los usuarios (administradores y asesores) gestionar ventas de productos, usuarios y otros datos relacionados con los servicios bancarios.

## Arquitectura

El proyecto utiliza Node.js para el backend y React.js para el frontend, elegidos por:
- La eficiencia y escalabilidad de Node.js para aplicaciones en tiempo real
- La flexibilidad y componentización de React.js para crear interfaces de usuario dinámicas

### Componentes Clave:
- **Frontend (React.js)**: Gestiona la interfaz de usuario y las interacciones del cliente
- **Backend (Node.js)**: Maneja la lógica de negocio y las operaciones con la base de datos
- **Base de Datos (MySQL)**: Almacena la información de usuarios, ventas y productos

## Instalación

### Prerrequisitos
- Docker
- Docker Compose

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/lokogam/Konectta.git
   cd Konectta
   ```

2. **Configurar el entorno:**
   Asegúrate de que las variables de entorno estén correctamente configuradas en tu archivo `.env`:
   ```
   # MySQL Config
   MYSQL_ROOT_PASSWORD=root_password
   MYSQL_DATABASE=bank_db
   MYSQL_USER=bank_user
   MYSQL_PASSWORD=bank_password

   # Backend Config
   BACKEND_PORT=5000
   JWT_SECRET=your_jwt_secret_key

   # Frontend Config
   FRONTEND_PORT=3000

   # Database Connection (para el backend)
   DB_HOST=mysql
   DB_PORT=3306
   DB_USER=bank_user
   DB_PASSWORD=bank_password
   DB_NAME=bank_db

   ```

3. **Iniciar servicios:**
   ```bash
   docker-compose up -d --build
   ```

## Acceso
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

## Credenciales de Prueba
- Administrador: carlos.mendoza@bank.com
- Asesor: ana.lopez@bank.com
- Asesor: juan.perez@bank.com
- Contraseña para todos: password123

## Características
- Sistema de login con captcha
- Gestión de usuarios (CRUD) para administradores
- Radicación y gestión de ventas de productos financieros
- Diferentes vistas y permisos según el rol del usuario (Administrador/Asesor)
- Listado de productos radicados con funcionalidades de visualización, edición y eliminación

## Tecnologías Utilizadas
- **Backend**: Node.js
- **Frontend**: React.js
- **Base de Datos**: MySQL
- **Autenticación**: JWT
- **Contenedorización**: Docker

## Autor
LinkedIn: [Duvan Gamboa](https://www.linkedin.com/in/duvan-gamboa-5193951b2/)
Email: [duvangamboa8@gmail.com](mailto:duvangamboa8@gmail.com)  
```
