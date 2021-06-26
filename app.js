require('colors');

const { inquirerMenu,pause } = require('./helpers/inquirer');

const main = async () => {

    let opt = '';

    do {
        console.log( {opt} )
        opt =  await inquirerMenu();

        await pause();
        


    } while ( opt !== '0' );
    
    
    

}

main()




