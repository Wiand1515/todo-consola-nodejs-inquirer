const fs = require('fs');


/* Utilizamos el metodo fs para guardar nuestro archivo de manera local simulando una base de datos */

const archivo = './db/data.json'

const guardarDB = ( data ) => {
    /* Utilizamos el metodo JSON.stringify, para poder transformar la data en un archivo de formato valido .json */
    fs.writeFileSync( archivo, JSON.stringify( data ));
}

const leerDB = ( ) => {

    if ( !fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync( archivo,  {encoding: 'utf-8' } )
    

    const data = JSON.parse(info);

    /* console.log(data) */

    return data;



}

module.exports = {
    guardarDB,
    leerDB
}