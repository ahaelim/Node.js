const express = require("express");
const nunjucks = require("nunjucks"); // 넌적스 템플릿 엔진 사용
const indexRouter = require("./routes");
const app = express();

app.set("port", process.env.PORT || 8888);
// 어떤 형식의 문서를 view로 사용할건지?
// 넌적스 => njk / html
app.set("view engine", "html");

app.use("/", indexRouter);

// 넌적스가 app을 사용할 수 있도록 둘을 연결 시켜줌
nunjucks.configure("views", {
  express: app, // app 객체 연결
  watch: true, // html 파일이 연결되면 템플릿 엔진을 다시 렌더링
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});
