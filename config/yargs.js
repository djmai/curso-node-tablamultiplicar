// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');


const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar',
    },
    'h': {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Es el limite de la tabla de multiplicar',
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Mostar la impresión del resultado',
    }
  })
  .check((argv, options) => {
    const filePaths = argv._
    if (isNaN(argv.base)) {
      throw new Error("La base debe ser del tipo número")
    }
    return true;
  })
  .argv;


module.exports = argv;