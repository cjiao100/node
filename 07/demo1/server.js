const http = require('http')

http.createServer( (req,res) => {
    res.write('1111')
    res.end();

}).listen(8088);