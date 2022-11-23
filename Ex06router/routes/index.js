const express = require("express");
const router = express.Router(); // 라우터 사용

router.get("/", (req, res) => {
  res.send("index router!");
});

// index.js를 app.js에서 활용해야하므로 내보내주기
module.exports = router;
