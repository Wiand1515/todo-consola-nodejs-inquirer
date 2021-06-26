/* Importaciones externas */
const { v4 : uuidv4} = require('uuid');

/* Generamos una nueva clase en Js */
class Tarea {
    /* Asignamos que contendra la clase Tarea */
    id = '';
    desc = '';
    completadoEn = null;

    /* indicamos valores en el metrodo constructor que luego seran utilizados para cuando generemos la nueva instancia */
    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;

    }




}

/* Forma de exportar por defecto en Node js */
module.exports = Tarea;


