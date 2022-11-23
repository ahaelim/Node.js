const express = require("express");
const router = express.Router();

// 쿠키 설정하기
router.get("/setcookie", (req, res) => {
  let nickname = "arrrrr";

  // 쿠키는 클라이언트에 저장
  // 서버가 클라이언트에 보내주는것 => 응답
  // 유효기간 존재, 브라우저 꺼져도 존재할 수 있음
  res.cookie("nickname", nickname, {
    maxAge: 100000000, // 밀리초단위 (만료 시간)
  });

  res.cookie("dinner", "치킨", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 2),
  });

  res.send("쿠키생성");
});

// 쿠키 확인하기
// 클라이언트에 저장한거를 가져오는 것 => 요청
// 쿠키는 바로 가져올 수 없음 => cookie-parser 모듈 설치 필요함
// cookie-parser 모듈은 app에서 작성 해주면 됨!
router.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

module.exports = router;
