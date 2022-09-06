const fs = require('fs');
const word = './db/data.txt';

const saveDB = (data) => {
    fs.writeFileSync(word,JSON.stringify(data));
}

const readDb = () => {
    if ( !fs.existsSync(word) ) {
        return null;
    }

    const info = fs.readFileSync(word, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    console.log(data);
    return null;
}

module.exports = {
    saveDB,
    readDb
}