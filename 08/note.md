1. url
    req.url 获取url
    url.parse() 将url转化为url对象
    url.parse(reqUrl, true).query 获取url上所有的参数对象，第二个参数表示是否解码
    如果url.parse()不解码，也可以通过引入querystring的包，通过querystring.parse()来解码