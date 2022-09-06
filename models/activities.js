const Work = require("./work");

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
        })

    }

    createActivitie(description = '') {
        const activitie = new Work(description);

        this._list[activitie.id] = activitie;
    }
}

module.exports = { Activities };