const { read } = require('fs');

require('colors');



const showMenu = () => {

    return new Promise( (resolve) => {

        console.log('============================'.green);
        console.log('      Select an option'.green);
        console.log('============================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`.green)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir \n`)
    
        //como recibir informacion de usuario
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Selecciona una opcion: ', (opt)=> {
            
            readline.close();
            resolve(opt)
        })

    })



}

const pause = () => {
    return new Promise((resolve) => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        
        readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt)=> {
            readline.close();
            resolve();
        })

    })

}


module.exports = {
    showMenu,
    pause
}


