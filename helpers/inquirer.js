/* Importaciones externas */
const inquirer = require('inquirer');
require('colors');

/* Constante del paquete que recibe un array y un objeto de opciones a ser consultadas por el usuario */
const questions = [
    {
        /* Type: tipo de la opcion, name: Nombre de esta opcion, message: Mensaje para el usuario; choices: las opciones de nuestro menu */
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                /* Algo asi como el valor unico asignado a la seleccion */
                value: '1',
                /* Nombre de la opcion y lo que se mostrara en pantalla */
                name: `${"1.".green} Crear tarea`
            },
            {
                value: '2',
                name: `${"2.".green} Listar tareas`
            },
            {
                value: '3',
                name: `${"3.".green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${"4.".green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${"5.".green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${"6.".green} Borrar tarea`
            },
            {
                value: '0',
                name: `${"0.".red} Salir`
            },
        ]
    }
]

/* Creamos la funcion asincrona inquierer menu para poder mostrar nuestro menu en consola */
const inquirerMenu = async () => {
    console.clear();
    /* Imprimimos las cabeceras de nuestra app, dandole un color verde con colors*/
    console.log('============================'.green);
    console.log('      Select an option'.green);
    console.log('============================\n'.green);

    /* destructuramos el archivo {options}, con el fin de esperar la respuesta de manera asincrona y mostrar en pantalla al usuario este menu; Tomamos el valor de opciones desde la constante questions asignada mas arriba */
    const {opcion} = await inquirer.prompt(questions);

    return opcion;

}

/* Creamos la funcion pause de manera asincronta */
const pause = async () => {
    /* Asignamos la interaccion y mensaje que tendra el usuario con esta parte de la funcion, en este caso es de tipo input */
    const question = [
        {
        type: 'input',
        name: 'pause',
        message: `Presiona ${"ENTER".blue} para continuar`
        }
    ]
    
    /* Esperamos la respuesta desde inquirer.prompt esperando y entregando como paramatro la variable question asignada en este mismo scope de codigo */
await inquirer.prompt(question);
}

/* Con esta funcion pretendemos leer el input entregado por el usuario con el fin de luego poder asignarlo a nuestro arreglo de tareas */
const leerInput = async( message ) => {

    /* Al igual que nuestras constantes questions asignadas anteriormente esto lo pide, inquirer como el conjunto de opciones para poder trabajar */
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question)

    return desc;


}



/* Exportacion de modulos */
module.exports = {
    inquirerMenu,
    pause,
    leerInput
}