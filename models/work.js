const {v4: uuidv4} = require('uuid');

class Work {

    //Atributos
    id = '';
    description = '';
    finish = null;

    constructor( description) {
        this.id = uuidv4();
        this.description = description;
        this.finish = null;
    }

}


module.exports = Work;

