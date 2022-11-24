const express = require("express");
const app = express();
const cookieRouter = require("./routes/cookie");
const sessionRouter = require("./routes/session");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// 세션도 바로 사용 불가능 express-session 모듈 설치 필요함

app.set("port", process.env.PORT || 8888);

// 사용할 때 앱에 붙여줘야함!
app.use(cookieParser()); // 쿠키 값 확인 시 필요함

app.use(
  session({
    httpOnly: true, // http요청으로 온 것만 처리
    resave: false, // 세션을 언제나 저장할건지 설정
    // 세션값을 암호화할때 쓰이는 키값도 지정해줘야함
    secret: "secret key", // 임의로 지정하기
  })
);

app.use("/c", cookieRouter);
app.use("/s", sessionRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});
