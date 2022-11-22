// 존재하는 파일을 읽어오는 내장모듈
const fs = require("fs");

// node사용할 때는 예외처리에 신경써줘야함
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    // 에러 발생시 예외 처리
    throw err;
  }
  // 결과물은 buffer(메모리에 저장된 데이터)형식으로 제공
  console.log(data);
  console.log(data.toString());
});
