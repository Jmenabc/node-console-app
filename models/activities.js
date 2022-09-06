const Work = require("./work");
require('colors');

class Activities {
    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const tarea = this._list[key];
            list.push(tarea);
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    chargeActivitiesFromArrays(activities = []) {
        activities.forEach(tarea => {
            this._list[tarea.id] = tarea;
        });

    }

    createActivitie(description = '') {
        const activitie = new Work(description);

        this._list[activitie.id] = activitie;
    }

    completeList() {
        //FORMATO:
        //1.- (Tarea):-- Completada | Pendiente
        //EL numero va en rosa
        //La tarea va en blanco

        this.listArr.forEach((tarea, i) => {
            const idx = `${i + 1}.-`.blue;
            const { description, finish } = tarea;
            const status = (finish)
                ? 'Completada'.green
                : 'Pendiente'.red
            console.log(`${idx} ${description} :-- ${status}`);
        });
    }
}

module.exports = Activities;