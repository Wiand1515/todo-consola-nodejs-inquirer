/* Importaciones externas */
require('colors');

/* Importaciones propias */
const { 
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar,
    confirmar   
 } = require('./helpers/inquirer');

const Tarea = require('./models/tarea');

const Tareas = require('./models/tareas');

const {guardarDB, leerDB} = require('./helpers/guardarArchivo')


/* Declaracion funcion principal para trabajar de manera asincrona */
const main = async () => {

    /* Asignar la variable de opciones */
    let opt = '';

    /* Nueva instancia de la constante Tareas */
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
     tareas.cargarTareasFromArray(tareasDB);

    }

    await pause();



    /* Ciclo que permite ejecutar de manera permanente el menu */
    do {
        /* Corroborar que se encuentra en la variable opt */
        console.log( {opt} )
        /* Imprimie menu de acciones */
        opt =  await inquirerMenu();


        /* Switch para controlar las acciones de nuestro menu de manera controlada */
        switch (opt) {
            /* En caso de ser la primera accion, nuestro llamara a la funcion leer input, la cual no es mas que un archivo de opciones que nos permitan ingresar datos por el usuario */
            case '1':
                const desc = await leerInput('Descripcion: ');

                /* Ingresamos la variable desc a nuestro metodo crearTarea con el fin de que ya se vea reflejada en nuestro entorno */
                tareas.crearTarea( desc ); 

                break;

                /* Listamos las tareas  */
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '6':
                const id =  await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0' ){
                    
                    const del = await confirmar('¿Deseas borrar esta tarea?');
                    if(del){
                        tareas.borrarTarea(id);
                        console.log(`${"Tarea borrada con exito".yellow}`)
                    };
                };
                break;
        }

        guardarDB( tareas.listadoArr);





        /* Llamamos a la funcion pausa, la cual nos permitira continuar nuestro ciclo, una vez seleccionada una opcion */
        await pause();
        

        /* Condicion necesaria para terminar el ciclo do-while */
    } while ( opt !== '0' );
    
    
    

}

/* Ejecucion de la funcion Main */
main()




