var http = require("http");
var app = require("express")();
// 경로설정을 좀 쉽게 가져가 보아요!!
var path = require("path");

// Routing 처리
var routes = require("./routes");
var company = require("./routes/company");
var product = require("./routes/product");

// view setting
app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");


// 들어오는 모든 request 에 대한 처리
app.use("*", function(req,res,next) {
    next();
});

app.use("/", routes);
app.use("/intro", company);
app.use("/product", product);

app.get("*", function(req, res){

});

http.createServer(app).listen(5544,"localhost");

console.log("라우팅 테스트 -- 5544");
