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
        activitie.chargeActivitiesFromArrays(activitiesDB);
    }


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
                activitie.completeList();
                break;
            case '3':
                //Listamos la opción/es completadas
                activitie.listActivitiesCompletes(true);
                break;
            case '4':
                //Listamos la opción/es no completadas
                activitie.listActivitiesCompletes(false);
                break;
        }


        saveDB(activitie.listArr);


        await pause();

        // const work = new Work('Comprar comida');

        // console.log(work);
    } while (opt !== '0');

}



main();