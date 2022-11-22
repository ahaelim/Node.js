const express = require("express");
const app = express(); // app생성

// app.set('key키값', value실제값) : 키에 값을 저장하도록 설정
app.set("port", process.env.PORT || 8888);
//              기본 포트가 있다면 그 번호로 포트 지정
//              그렇지 않으면 8888로 사용하겠다

app.get("/home", (req, res) => {
  // http 모듈을 사용했다면
  // => html 파일 응답하기 위해서 필요한것? => fs 모듈
  // express 모듈은 굳이 fs모듈 사용하지 않아도 됨!!
  // 응답 헤더 작성하지 않아도 됨
  //         현재파일의 경로
  res.sendFile(__dirname + "/Ex02.html"); // 파일 응답
  //   res.sendFile("./Ex02.html");
});

// 포트 번호 지정
// set으로 지정해둔 key값 들고오기
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});
