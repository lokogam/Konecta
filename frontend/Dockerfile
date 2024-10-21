# Usar la imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de dependencia
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto
EXPOSE ${FRONTEND_PORT}

# Iniciar la aplicación
CMD ["npm", "start"]
