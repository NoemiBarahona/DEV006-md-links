const { mdLinks } = require("../src/index.js");


describe("mdLinks", () => {

  it("should...", () => {
    console.log("FIX ME!");
  });
  // it("Deberia devolver una promesa", () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it("Deberia rechazar cuando el path no existe ", () => {
    return mdLinks("/noemi/noExiste.md").catch((error) =>{
      expect (error).toBe("La ruta no existe")
    });
  });

});
