//Módulo file system
// Serve para trabalhar com arquivos e diretorios
let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivo.txt", "Texto por whiteFile", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Escreveu com sucesso !");
  }
});

// readFile serve para ler arquivos