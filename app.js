require('colors');
const {
    inquirerMenu,
    pause,
    readInput } = require('./helpers/inquirer');
const { saveDB, readDb } = require('./helpers/saveData');
const Activities = require('./models/activities');
const Work = require('./models/work');

const main = async () => {

    let opt = '';
    const activitie = new Activities();

    const activitiesDB = readDb();

    if (activitiesDB) {
        //Establecer las tareas
    }

    await pause();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Creamos la opcion
                const description = await readInput('Descripcion');
                activitie.createActivitie(description);
                break;

            case '2':
                //Listamos la opción/es
                console.log(activitie._list);
                break;
        }


         saveDB(activitie.listArr);


        await pause();

        // const work = new Work('Comprar comida');

        // console.log(work);
    } while (opt !== '0');

}



main();