const http = require("http");
const fs = require("fs").promises;

// promise => 비동기 처리에 사용
// async => 비동기함수 만들 때 사용 (요청응답을 비동기로 처리할때 )
const server = http.createServer(async (req, res) => {
  // Ex03.html 파일을 응답
  // 오류 처리(200, 500)
  try {
    const f = await fs.readFile("./Ex03.html");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf=8" });
    res.end(f);
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    res.end(err.message);
  }
});

server.listen(8888);
server.on("listening", () => {
  console.log("8888번 포트에서 서버 연결 대기중...");
});
