# gestion_nomina_back

Este es el backend desarrollado en Node.js y Express para la aplicación web de liquidación de nómina de Asesores Comerciales.

## Requisitos Tecnológicos
- Node.js
- Express
- REST API
- Base de datos MongoDB

## Instalación

Clona este repositorio: 
```
git clone https://github.com/David-Viuche/gestion_nomina_back.git
```

Ingresa al directorio del proyecto: cd turepositorio/backend
Instala las dependencias: 
```
npm install
``` 

## Configuración de la Base de Datos

Configura tu base de datos relacional o no relacional en el archivo .env.

### Ejemplo .env
```
USERDB=userPrueba
PASSDB=constrasena
HOSTDB=mybase.com
NOMBDB=comercial
PORT=3005
```
Ejecuta las migraciones y/o configuraciones necesarias para la base de datos.

## Ejecución

Inicia el servidor: 

```
npm run start
```

El servidor estará disponible en: http://localhost:3000
