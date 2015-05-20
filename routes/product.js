var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.write("<h1>상품 페이지 홈입니다.</h1>");
    res.end();
});

router.get("/notebook", function(req,res){
    res.write("<h1>Notebook 페이지 입니다.</h1>");
    res.end();
});

module.exports = router;
