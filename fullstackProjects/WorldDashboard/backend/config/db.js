const mysql = require('mysql2')
require('dotenv').config()

// function connetDB(){
const mysqlconnection = mysql.createConnection({
    host:process.env.HOST ,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DB_NAME
})


mysqlconnection.connect()
module.exports = mysqlconnection

// }

// connetDB()