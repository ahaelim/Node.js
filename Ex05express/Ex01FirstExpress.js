const express = require("express");

// 가장 먼저 어플리케이션 생성해주기!
const app = express(); // app 생성

// get : get요청 받는다!
app.get("/", (req, res) => {
  // root로 get요청시 어떻게 할건지?
  res.send("Hello World!"); // 작성한 텍스트 응답
});

app.listen(8888, () => {
  // 8888 포트로 오는 요청 기다림
  console.log("8888번 포트에서 서버 연결 대기중...");
});
