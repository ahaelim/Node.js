// mysql2 모듈 설치 후 사용
const mysql = require("mysql2");

// 연결할 디비 정보
const db_info = {
  host: "localhost",
  port: "3306",
  user: "test",
  password: "1234",
  database: "testdb",
};

// 연결 도와주는 것들을 내보내기
// 1. init으로 초기화
// 2. 그 초기화된 정보로 db 연결 해줌
module.exports = {
  // 위쪽에 있는 연결 디비 정보로 초기화 해주는 것 (함수로 정의)
  init: function () {
    return mysql.createConnection(db_info);
  },
  // 연결 해주는 것, connect
  // 예외처리를 꼭 해줘야함!
  // 초기화한 값들을 가지고 연결을 해줌
  connect: function (conn) {
    // connect를 호출했을 때 에러가 발생한 상황도 처리해줘야 함
    conn.connect(function (err) {
      if (err) {
        console.error("mysql 연결 오류 : " + err);
      } else {
        console.log("mysql 연결 성공!");
      }
    });
  },
};
