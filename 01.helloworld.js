// 1.  사용할 module 을 불러들여요!!
var http = require("http");

http.createServer(function (req, res){
    res.writeHead(200, {
        "Content-Type" : "text/html; charset=utf8"
    })
    res.write("<h1>Hello World</h1>");
    res.end();
}).listen(5554,"localhost");

console.log("서버기동 5554");