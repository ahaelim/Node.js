// var, func에서 만들 모듈을 둘 다 가져와 사용하기
const { odd, even } = require("./var");
const checkOddOrEven = require("./func");

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkStringOddEven;
console.log(checkOddOrEven(10));
console.log(checkStringOddEven("안녕하세요"));
