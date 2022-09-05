const Work = require("./work");

class Activities {
    _list = {};

    constructor() {
        this._list = {};
    }

    createActivitie(description = '') {
        const activitie = new Work(description);

        this._list[activitie.id] = activitie;
    }
}

module.exports = Activities;