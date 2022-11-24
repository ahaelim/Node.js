const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중...");
});
