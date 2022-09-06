const fs = require('fs');
const word = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(word,JSON.stringify(data));
}

const readDb = () => {
    if ( !fs.existsSync(word) ) {
        return null;
    }

    const info = fs.readFileSync(word, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    saveDB,
    readDb
}