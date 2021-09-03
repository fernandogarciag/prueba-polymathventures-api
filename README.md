# prueba-polymathventures-api

Esta aplicación usa express y sequelize
Configuración de la aplicación en un ambiente de pruebas:

1. Ejecutar el comando “npm i”
2. Crear un archivo de nombre ”.env” y copiar el contenido de .env.example en .env
3. Cambiar las configuraciones del archivo .env por su propia base de datos:

- APP_PORT: El puerto que usara su aplicación
- DB_CONNECTION: Su tipo de base de datos compatible con sequelize
- DB_HOST: La url de su base de datos
- DB_PORT: El puerto de su base de datos
- DB_DATABASE: El nombre de su base de datos
- DB_USERNAME: El usuario de su base de datos
- DB_PASSWORD: La contraseña de su base de datos

4. Correr el comando “npm start”
