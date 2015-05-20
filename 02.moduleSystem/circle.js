var PI = Math.PI;

exports.area = function(r){
    return PI*r*r;
};

exports.circumference = function(r){
    return PI*r*2;
};

// console.log("이거 호출되나요???");

// 실제로 아래와 같이 래핑되어 실행된다.
// module.exports 가 return ( exports 가 module.exports 객체의 reference 가 된다. )
/*
(function(exports, module, require, __filename, __dirname){

    var PI = Math.PI;

    exports.area = function(r){
        return PI*r*r;
    };

    exports.circumference = function(r){
        return PI*r*2;
    };

    console.log("이거 호출되나요???");

})();
*/