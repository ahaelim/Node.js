const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("USER ROUTER!!");
});

module.exports = router;

// 사용자의 요청을 app에서 받아서
// 그 요청이 어디에 있는지, 어느 곳으로 가야하는지 => index or user
// 경로를 보고 알수있음
