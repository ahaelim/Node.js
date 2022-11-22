const fs = require("fs").promises;
// fs모듈을 promise형식으로 바꿔서 사용(비동기 통신)

fs.readFile("./readme.txt")
  .then((data) => {
    // buffer형태로 제공(기본)되므로 변환
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
