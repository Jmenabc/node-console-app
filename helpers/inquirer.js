const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.magenta} Crear tarea`
            },

            {
                value: '2',
                name: `${'2.'.magenta} Listar tareas`
            },

            {
                value: '3',
                name: `${'3.'.magenta} Listar tareas completadas`
            },

            {
                value: '4',
                name: `${'4.'.magenta} Listar tareas pendientes`
            },

            {
                value: '5',
                name: `${'5.'.magenta} Completar tarea(s)`
            },

            {
                value: '6',
                name: `${'6.'.magenta} Borrar tarea`
            },

            {
                value: '0',
                name: `${'0.'.magenta} Salir`
            },
        ]
    }
];




const inquirerMenu = async () => {
    console.clear();

    console.log('====================='.green);
    console.log('Seleccione una opción'.white);
    console.log('=====================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpts);
    return opcion;
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ]
    await inquirer.prompt(question);

}

const readInput = async (message) => {
    const question = {
        type: 'input',
        name: 'description',
        message,
        validate(value) {
            if (value.length === 0) {
                return `${'Por favor ingrese un valor'.red}`
            }
            return true;
        }
    }
    const {description} = await inquirer.prompt(question);
    return description;
}


module.exports = {
    inquirerMenu,
    pause,
    readInput
}





