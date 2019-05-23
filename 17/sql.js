const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'cjw123456',
    database: 'cms'
})

db.connect()

module.exports = db