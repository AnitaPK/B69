const mysql = require('mysql2')
require('dotenv').config()

// function connetDB(){
const mysqlconnection = mysql.createConnection({
    host:process.env.HOST ,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DB_NAME
})


mysqlconnection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Database MySQL Connected...');
})
module.exports = mysqlconnection

// }

// connetDB()