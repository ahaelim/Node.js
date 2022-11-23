const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", (req, res) => {
  res.render("loginform");
});

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
