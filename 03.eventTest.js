var events = require("events");
var util = require("util"); // for inheritance

// 생성자 함수 (constructor)
var Car = function(){
    this.carName = "Sonata";
}

// 상속과정
util.inherits(Car, events.EventEmitter);

// 이벤트 핸들러 (이벤트 처리하는 함수)
var carForward = function () {
    console.log("자동차 전진!!");
}

var insertGas = function (gas) {
    console.log("주유합니다. 주유량 : " + gas);
}

// Car instance 생성
var car = new Car();

// Listener 등록
car.on("CAR_FORWARD", carForward);
car.on("INSERT_GAS", insertGas);

// event 발생
car.emit("CAR_FORWARD");
car.emit("INSERT_GAS",50);