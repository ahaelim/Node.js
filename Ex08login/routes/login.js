const express = require("express");
const router = express.Router();

// loginform.html 렌더링
router.get("/loginform", (req, res) => {
  res.render("loginform");
});

// 로그인 처리
router.post("/login", (req, res) => {
  let id = req.body.id;
  let pw = req.body.pw;

  if (id == "smhrd" && pw == "12345") {
    res.render("loginSuccess", { id: id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
