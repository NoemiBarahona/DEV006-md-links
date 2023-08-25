# mdLinks

`mdLinks`  es una biblioteca que te permite analizar archivos Markdown y extraer los enlaces que contiene. Además, ofrece la opción de validar la disponibilidad de estos enlaces en línea. Esta biblioteca resulta útil para desarrolladores que trabajan con archivos Markdown y necesitan extraer y validar enlaces de manera programática.

## Instalación

Para utilizar mdLinks, debes primero instalarlo en tu proyecto. Puedes hacerlo a través de npm (Node Package Manager). Abre tu terminal y ejecuta el siguiente comando:

bash
npm install md-links


## Uso

### Como módulo en tu código

Para utilizar `mdLinks` en tu código, primero debes importarlo:

javascript
const { mdLinks } = require("md-links");


Luego, puedes llamar a la función mdLinks proporcionando la ruta de un archivo Markdown como argumento. También puedes incluir opciones adicionales, como la validación de los enlaces. La función retornará una promesa que se resolverá con un arreglo de objetos que representan los enlaces encontrados en el archivo.

javascript
const path = "ruta/al/archivo.md";
const options = { validate: true };

mdLinks(path, options)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });


### Como línea de comandos

`mdLinks` también puede ser utilizado desde la línea de comandos. Puedes ejecutarlo en tu terminal de la siguiente manera:

bash
md-links ruta/al/archivo.md --validate


Esto analizará el archivo Markdown en la ruta especificada y mostrará los enlaces encontrados junto con su estado de validación.

## API

La función `mdLinks` acepta los siguientes parámetros:

- `path` (string): La ruta al archivo Markdown o directorio que deseas analizar.
- `options` (objeto, opcional): Un objeto que puede contener la propiedad `validate` (booleano) para habilitar o deshabilitar la validación de los enlaces. Si `validate` es true, los enlaces serán validados.

La función devuelve una promesa que se resolverá con un arreglo de objetos. Cada objeto representa un enlace encontrado en el archivo. Cada objeto tiene las siguientes propiedades:

- `href` (string): La URL del enlace.
- `text` (string): El texto descriptivo del enlace.
- `file` (string): La ruta absoluta al archivo donde se encontró el enlace.

### Ejemplos

#### Ejemplo 1: Obtener enlaces sin validación

javascript
const path = "ruta/al/archivo.md";
const options = { validate: false };

mdLinks(path, options)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });


#### Ejemplo 2: Obtener enlaces con validación

javascript
const path = "ruta/al/archivo.md";
const options = { validate: true };

mdLinks(path, options)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });