/** Loads data from foam-seed.json into 'pictures' table  */

const data = require ('./foam-seed.json');
const {Client} = require('pg');
const DB_URI = 'postgresql:///culture_biosciences';

let db = new Client ({
    connectionString: DB_URI
});

db.connect();

async function loadData(row) {
    await db.query(`
        INSERT INTO pictures(pic_url, last_modified)
        VALUES ('${row.url}', '${row.lastModified}')`
    )
}

for (let item of data) {    
    loadData(item);
};

db.query('SELECT NOW()', (err, res) => {
    db.end()
})



