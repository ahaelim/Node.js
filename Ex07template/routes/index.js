const express = require("express");
const router = express.Router();

// 특정 요청 시
// index.html을 응답 + 특정 데이터까지 같이 보내서
// html에서 출력 되도록 하기!
router.get("/", (req, res) => {
  // render 호출 시
  // 보내는 값 {} : 넌적스가 처리함
  // index : index.html 을 렌더링하여 보내겠다!
  res.render("index", { title: "value" });
});

router.get("/hello", (req, res) => {
  res.render("index", { title: "hello" });
});

module.exports = router;