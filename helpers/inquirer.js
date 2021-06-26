const inquirer = require('inquirer');
require('colors');


const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('      Select an option'.green);
    console.log('============================\n'.green);


    const {opcion} = await inquirer.prompt(questions);

    return opcion;

}

const pause = async () => {
    const question = [
        {
        type: 'input',
        name: 'pause',
        message: `Presiona ${"ENTER".blue} para continuar`
        }
    ]
    
await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pause
}