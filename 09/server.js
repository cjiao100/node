const http = require('http')
const url = require('url')

http.createServer((req, res) => {

    // 设置响应头
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})

    const reqUrl = req.url
    const url1 = url.parse(reqUrl, true).query

    console.log(url1)

    res.write('123')

    res.end("用户名：" + url1.userName + " ------------> " + "密码: " + url1.userPwd)
}).listen(8088)