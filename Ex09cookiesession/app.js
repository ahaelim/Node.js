const express = require("express");
const app = express();
const cookieRouter = require("./routes/cookie");
const cookieParser = require("cookie-parser");
app.set("port", process.env.PORT || 8888);

// 사용할 때 앱에 붙여줘야함!
app.use(cookieParser()); // 쿠키 값 확인 시 필요함
app.use("/c", cookieRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});