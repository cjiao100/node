const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const reqUrl = req.url

    // const queryUrl = url.parse(reqUrl, true).query.title
    const queryUrl = url.parse(reqUrl).query.title

    console.log( querystring.parse(queryUrl) )

    res.end();
}).listen('8088')