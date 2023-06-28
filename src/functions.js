const fs = require('fs');
const path = require('path');

const checkPath = (route) => {
    return new Promise((resolve, reject) => {
        const pathExist = fs.existsSync(route); // identificar si la ruta existe.
        if (pathExist) {
            resolve(route)
        } else {// si no existe la ruta es reject, rechaza la promesa
            reject('La ruta no existe')
        }
    });
};

//Revisar si la ruta es absoluta o relativa 
const itsAbsolute = (route) => {
    return new Promise((resolve, reject) => {
        const routeAbsolute = path.isAbsolute(route);
        if (!routeAbsolute){
        const routeConvertAbsolute = path.resolve(route);
        resolve(routeConvertAbsolute);
        }
        resolve(route);
    });
};

//convertir a absoluta
const convertAbsolute = (route) => {
    return new Promise((resolve) => {
        const routeConvertAbsolute = path.resolve(route);
        resolve(routeConvertAbsolute);
    });
};
// revisar si es archivo o directorio
const verifyRouteType = (route) => {
  return new Promise((resolve, reject) => {
      fs.stat(route, (error, stats) => {
          if (error) {
              reject(error);
              return;
          }
          if (stats.isFile()) {
              resolve('archivo.');
          } else if (stats.isDirectory()) {
              resolve('directorio');
          } else {
              reject('La ruta no es ni un archivo ni un directorio')
          }
      });
  });
}
// revisar si es un archivo .md
const extensionCheck = (route) => {
  return new Promise((resolve, reject) => {
      const extension = path.extname(route);
      resolve(extension === '.md');
  });
}
//Leer archivos
const readMD = (route) => {
  return new Promise((resolve, reject) => {
      fs.readFile(route, 'utf-8', (error, datos) => {
          if(error) {
              reject(error);
          } else {
              resolve(datos);
          }
      });
  });
};

//Extraer links de los archivos
const extractLinks = (content, filePath) => {
  return new Promise((resolve, reject) => {
      const regExtract = /\[([^\]]+)\]\(([^\)]+)\)/g;
      const links = [];
      let match;

  while ((match = regExtract.exec(content)) !== null) {
      const text = match[1];
      const URL = match[2];
      links.push({ href: URL, text: text, file: filePath});
  }
  if (links.length > 0){
      resolve(links);
  }else {
      reject(new Error('No se encontraron enlaces'))
  }
  });
};

module.exports = {
  checkPath,
  itsAbsolute,
  convertAbsolute,
  verifyRouteType,
  extensionCheck,
  readMD,
  extractLinks,
};