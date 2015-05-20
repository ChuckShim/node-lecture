
var circle = require("./circle");
// 같은 폴더내에서 circle.js 를 찾아서 require (1순위 작업)
// 같은 폴더내에서 circle 이라는 폴더를 찾아서 그 안에 있는 index.js 를 찾아서 require (module 만들때 이방법 사용)

console.log(circle.area(4));
