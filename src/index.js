const {
  checkPath,
  itsAbsolute,
  convertAbsolute,
  verifyRouteType,
  extensionCheck,
  readMD,
  extractLinks
} = require('./functions.js');

const mdLinks = (path, options) => {
  let filepath; // Variable global para almacenar el filepath

  return new Promise((resolve, reject) => {
    itsAbsolute(path)
      .then((absolutePath) => {
        filepath = absolutePath; // Asignar el valor del filepath a la variable global
        return checkPath(absolutePath);
      })
      .then((path) => {
        return extensionCheck(path);
      })
      .then((isMD) => {
        if (!isMD) {
          throw new Error('La extensión del archivo no es .md');
        }
        return readMD(path);
      })
      .then((data) => {
        const resultLinks = extractLinks(data, filepath); // Utilizar la variable global filepath
        return resolve(resultLinks);
      })
      .catch((error) => {
        console.error(error);
        return reject("Esto está fallando");
      });
  });
};


const resultado = mdLinks('C:\\Users\\slcan\\MDL\\README.md');

resultado.then((data) => {
  console.log("Data", data);
}).catch((error) => {
  console.log("error", error);
});


// checkPath('src/functions.js')
//   .then(() => {
//     // La promesa se resolvió correctamente, no es necesario mostrar nuevamente en consola
//   })
//   .catch(() => {
//      // Mostrar en consola en caso de rechazo
//   });

//   itsAbsolute('C:\\Users\\slcan\\MDL\\src\\functions.js')
//   .then(resultado => {
//     console.log("Es absoluta", resultado); // true
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   itsAbsolute('src\\functions.js')
//   .then(resultado => {
//     console.log("No es absoluta", resultado); // false
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   convertAbsolute('src\\funciones.js')
//   .then(routeConvertAbsolute => {
//     console.log(routeConvertAbsolute); // false
//   })
//   .catch(error => {
//     console.error(error);
//   });

//   verifyRouteType('C:\\Users\\slcan\\OneDrive\\Escritorio\\Noe\\node')
//   .then(type => console.log(`la ruta es un ${type}.`))
//   .catch(error => console.log(`Error al verificar la ruta:`, error ));

//   verifyRouteType('C:\\Users\\slcan\\OneDrive\\Escritorio\\Noe\\node\\baby-steps.js')
//   .then(type => console.log(`la ruta es un ${type}.`))
//   .catch(error => console.log(`Error al verificar la ruta:`, error ));

//   extensionCheck('C:\\Users\\slcan\\OneDrive\\Escritorio\\Noe\\node\\Hola.md')
//   .then(esMD => {
//     if (esMD) {
//       console.log('El archivo es MD');
//     }else {
//       console.log('El archivo No es MD');
//     }
//   })
//   .catch(error => {
//     console.error('Error al verificar el archivo', error);
//   });


//   readMD('C:\\Users\\slcan\\OneDrive\\Escritorio\\Noe\\node\\Hola.md')
//   .then((datos) => {
//       return extractLinks (datos);
//   })
//   .then((links) => {
//         console.log('links extraidos' ,links);
//   })
//   .catch(error => {
//     console.error('Error al verificar el archivo', error);
//   });

module.exports = {
  mdLinks,
};