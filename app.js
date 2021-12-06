const { crearTabla } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require('./config/yargs');
// Limpiar consola
console.clear();

crearTabla(argv.b, argv.h, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.bgGreen.black))
  .catch((err) => console.log(err));
