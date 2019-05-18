const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
    let postVal = ""

    req.on('data', item => {
        postVal += item
    })

    req.on('end', () => {
        console.log(querystring.parse(postVal))
        // res.end的第一个参数必须是String或者Buffer
        res.end(querystring.parse(postVal).userName + " " + querystring.parse(postVal).namePwd);
    })


}).listen(8088)