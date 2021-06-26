/* Importaciones internas */
const Tarea = require('./tarea');


/* Generamos una clase de nombre Tareas */
class Tareas {
    /* Inicializamos la variable _listado como un objeto vacio para luego permitir, el utilizarlo de manera de ir agregando tareas */
    _listado = {};

    /* Transformar el objeto a arreglo para poder visualizarlo de mejor manera */

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach( (key) => {
            const tarea = this._listado[key];

            listado.push( tarea );
        } )





        return listado;

    }




    /* Definimos que caracteristicas contendra nuestro metodo constructor */
    constructor() {
        this._listado = {};
    }


    cargarTareasFromArray( tareas = []) {

        tareas.forEach( el => {
            this._listado[el.id]  = el;
        })




    }

    /* Creamos una nueva funcion llamada crear tarea, la cual va a recibir una nueva instancia de tarea y recibira como argumento desc */
    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);

        /* igualamos tarea con su respectivo id, de esta menera nos aseguramos de siempre estar asignando de manera unica e individual nuestras tareas */
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;