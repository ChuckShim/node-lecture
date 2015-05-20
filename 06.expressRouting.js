var http = require("http");

/*
var express = require("express");
var app = express();
*/

var app = require("express")();

// Routing 처리
var routes = require("./routes");
var company = require("./routes/company");
var product = require("./routes/product");

// 들어오는 모든 request 에 대한 처리
app.use("*", function(req,res,next) {
    // 일반적으로 logging 처리
    res.writeHeader(200,{
        "Content-Type" : "text/html; charset=utf8"
    });
    next();
});

app.use("/", routes);
app.use("/intro", company);
app.use("/product", product);

app.get("*", function(req, res){
    res.write("<h1>존재하지 않는 URL 입니다.</h1>");
    res.end();
});

http.createServer(app).listen(5544,"localhost");

console.log("라우팅 테스트 -- 5544");
