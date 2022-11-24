const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar= false, hasta=10 ) => {

    try {

    let salida = '';
    let salida2 = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} ${'x'.red} ${i} ${'='.green} ${base*i}\n`;
        salida2 += `${base} x ${i} = ${base*i}\n`;
    }

    if (listar) {
        console.log('==============='.rainbow);
        console.log(`Tabla del ${base}`);
        console.log('==============='.rainbow);
        console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida2);

    return `tabla=${ base }.txt`;
    } catch (error) {
     
        throw new Error(error)

    }

}


module.exports = {
    crearArchivo
}



