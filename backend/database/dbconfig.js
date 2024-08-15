const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database_name'
});

const promisePool = pool.promise();

module.exports = promisePool;
