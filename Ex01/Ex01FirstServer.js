// http 프로토콜 사용하기
const http = require("http");

// 서버 열기(createServer)
// 어디로 문을 열건지 포트번호 지정해줘야함(listen)
http
  .createServer((req, res) => {})
  .listen(8888, () => {
    console.log("8888 포트에서 서버 연결 중....");
  });
