require('colors');
const {inquirerMenu, pause} = require('./helpers/inquirer');
const Work = require('./models/work');

const main = async () => {

    let opt = '';



    do {
         opt = await inquirerMenu();

         await pause();

        // const work = new Work('Comprar comida');

        // console.log(work);
    } while (opt !== '0');

}



main();