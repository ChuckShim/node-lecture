var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.write("<h1>Company 페이지 홈입니다.</h1>");
    res.end();
});

module.exports = router;
