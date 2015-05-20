// 1. 필요한 module require
var http = require("http");

// 2. server 접속에 관한 option
var option = {
    host : "localhost",
    port : 5554,
    method : "GET",
    path : "/"
};

var req = http.request(option, function(res){
    console.log("상태코드 : " + res.statusCode);
    console.log("응답헤더 : " + res.headers);
    res.setEncoding("utf-8");
    res.on("data", function(result){
        console.log("서버가 보내준 결과는 : " + result);
    });
});

req.end();

console.log("request가 종료되었어요.");

// 크롤링 할때 이런방식으로 host 만 바까가면서 쭉 돌리면 될듯