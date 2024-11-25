# Organización de Personas

## Descripción
Organización de Personas es una aplicación diseñada para registrar a personas con su correo electrónico y el área de trabajo a la que pertenecen. En el backend se trabaja con dos tablas principales: `personas` y `areas`.

## Tecnologías Utilizadas
- **Node.js (v20.3.1)**
- **NestJS (v10.0.0)**
- **MySQL**

## Requisitos
- Node.js (v20.3.1)
- MySQL (versión X.X.X)
- npm (versión X.X.X)

## Instalación
1. Clona este repositorio:
    ```sh
    git clone https://github.com/cpizarroi/organizacion-personas-backend
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd organizacion-de-personas
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
4. Configura la base de datos MySQL:
    - Crea una base de datos nueva en MySQL con dos tablas: `personas` y `areas`.
    - Dentro de MySQL, ejecuta los comandos del archivo `script-organizaciondb.sql`.
    - Actualiza las credenciales de la base de datos en el archivo de configuración `.env`.

## Uso
1. Inicia la aplicación:
    ```sh
    npm run start
    ```
2. Abre tu navegador y visita `http://localhost:3000` para acceder a la aplicación.

## Base de Datos
La aplicación utiliza dos tablas en la base de datos MySQL:
- `personas`: Almacena la información de las personas registradas.
- `areas`: Almacena las diferentes áreas de trabajo.

## Pruebas Unitarias
Las pruebas unitarias se realizan utilizando [Jest](https://jestjs.io/).

### Instalación de Jest
1. Instala Jest como una dependencia de desarrollo:
    ```sh
    npm install --save-dev jest
    ```

2. Configura Jest en el archivo `package.json`:
    ```json
    {
      "scripts": {
        "test": "jest"
      }
    }
    ```

### Ejecución de Pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
    ```
    npm test
    ```

