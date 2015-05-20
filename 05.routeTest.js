var http = require("http");

http.createServer(function(req,res){
    var reqPath = req.url;
    res.writeHead(200, {
        "Content-Type" : "text/html; charset=utf8"
    });
    if(reqPath === "/"){
        res.write("<h1>환영합니다.</h1>");
    }else if(reqPath === "/intro"){
        res.write("<h1>회사 소개 페이지 입니다.</h1>");
    }else if(reqPath === "/product"){
        res.write("<h1>상품 페이지 홈 입니다.</h1>");
    }else if(reqPath === "/product/notebook"){
        res.write("<h1>Notebook 페이지 입니다.</h1>");
    }else{
        res.write("<h1>존재하지 않는 페이지 입니다.</h1>");
    }
    res.end();
}).listen(5544,"localhost");

console.log("서버기동 - 5544");