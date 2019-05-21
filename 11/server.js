//引入mysql包
const mysql = require('mysql')

// 配置mysql数据库
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123456",
    database: 'node_study',
    port: 3306
})

// 连接数据库
connection.connect()

// 执行SQL语句
connection.query('select * from user', (err, results, fields) => {
    if (err) throw err

    console.log(results)
})


// 关闭连接
connection.end()