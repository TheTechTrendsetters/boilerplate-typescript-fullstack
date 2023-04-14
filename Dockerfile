FROM node:18.15-alpine

# Actualiza el sistema operativo y instala las dependencias del sistema
RUN apk upgrade --update-cache --available && \
    apk add --update-cache bash git openssh && \
    rm -rf /var/cache/apk/* && \
    rm -rf /tmp/* && \
    rm -rf /var/tmp/*

# Configura el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos de la aplicación a la imagen
COPY package.json ./
COPY src/ ./src/

# Actualiza npm a la última versión
RUN npm install -g npm@latest

# Instala las dependencias de la aplicación
RUN npm install --quiet

# Expone el puerto que la aplicación usará
EXPOSE 3000

# Inicia la aplicación cuando se inicia el contenedor
CMD ["npm", "run", "build:prod"]
