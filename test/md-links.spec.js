const { mdLinks } = require("../src/index.js");

const path = 'C:\\Users\\slcan\\MDL\\test\\prueba.md';
const options = { validate: true };

describe("mdLinks", () => {
  it("Deberia retornar una promesa que se devuelve con array de objetos", (done) => {
    const result = mdLinks(path, options);
    expect(result).resolves.toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\slcan\\MDL\\test\\prueba.md',
        status: 200,
        ok: 'OK'
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'C:\\Users\\slcan\\MDL\\test\\prueba.md',
        status: 200,
        ok: 'OK'
      }
    ]).then(done);
  });
});

describe('itsAbsolute', () => {
  it('Debería resolver con la ruta convertida a absoluta si la ruta no es absoluta', () => {
    const route = '../ruta/relativa';
    const expected = '/ruta/absoluta';

    // Simular el comportamiento de path.isAbsolute para una ruta no absoluta
    path.isAbsolute.mockReturnValueOnce(false);

    // Simular el comportamiento de path.resolve para convertir la ruta a absoluta
    path.resolve.mockReturnValueOnce(expected);

    return expect(itsAbsolute(route)).resolves.toBe(expected);
  });

  it('Debería resolver con la ruta original si la ruta ya es absoluta', () => {
    const route = '/ruta/absoluta';

    // Simular el comportamiento de path.isAbsolute para una ruta absoluta
    path.isAbsolute.mockReturnValueOnce(true);

    return expect(itsAbsolute(route)).resolves.toBe(route);
  });
});
