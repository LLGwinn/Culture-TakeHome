const {Client} = require('pg');
const DB_URI = 'postgresql:///culture_biosciences';

let db = new Client ({
    connectionString: DB_URI
});

db.connect();

module.exports = db;