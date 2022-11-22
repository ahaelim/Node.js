// var.js 모듈을 사용하는 파일

// 모듈 사용할때 require 사용
// var에서 내보낸 모듈을 받아서 사용함
const { odd, even } = require("./var");

function checkOddOrEven(num) {
  if (num % 2) {
    return odd;
  } else {
    return even;
  }
}

// 모듈 내보내기
module.exports = checkOddOrEven;
