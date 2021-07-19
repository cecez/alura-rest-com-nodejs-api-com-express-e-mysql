const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'alura-rest-com-nodejs-api-com-express-e-mysql_mysqldb_1.alura-rest-com-nodejs-api-com-express-e-mysql_default',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'agenda-petshop'
})

module.exports = connection