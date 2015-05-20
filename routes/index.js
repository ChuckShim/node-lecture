var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.write("<h1>환영합니다.</h1>");
    res.end();
});

module.exports = router;
