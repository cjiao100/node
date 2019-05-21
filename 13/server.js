const http = require('http')
const mysql = require('mysql')
const querystring = require('querystring')

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {

        let postVal = ''

        req.on('data', (chuck) => {
            postVal += chuck
        })

        req.on('end', () => {
            let formVal = querystring.parse(postVal)
            let userName = formVal.userName
            let userPwd = formVal.userPwd

            const connection = mysql.createConnection({
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '123456',
                database: 'node_study'
            })

            connection.connect()

            connection.query('insert into user (userName, userPwd) value (?, ?)', [userName, userPwd], (err, results, fields) => {
                if (err) throw err

                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf-8'
                })

                res.write('注册成功')
                res.end()
            })

            connection.end()
        })
    }

}).listen(8080)