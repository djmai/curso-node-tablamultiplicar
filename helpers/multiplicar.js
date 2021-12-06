const fs = require("fs");

const crearTabla = async (base = 1, hasta = 10, listar = false) => {

  try {
    let salida = "", consola = "";
    salida += `====================\n    Tabla del: ${base}\n====================\n`;
    consola += `====================\n    Tabla del: ${base}\n====================\n`.blue;

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.red} ${base * i}\n`;
    }

    if (listar)
      console.log(consola);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `./salida/tabla-${base}.txt`;

  } catch (err) {
    throw err;
  }
};


module.exports = {
  crearTabla,
};
