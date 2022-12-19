// 라우터
const express = require("express");
const { User } = require("../models/user");
const router = express.Router(); // 라우터 사용

router.post("/insert", async (req, res, next) => {
  // id, pw, age 데이터 받기
  let { id, pw, age } = req.body;
  try {
    // 데이터 삽입 시 사용하는 함수
    // ORM은 SQL문을 사용하지 않고 함수만 호출

    // user -> 삽입된 데이터가 그대로 반환
    const user = await User.create({
      id: id, // 컬럼이름 : 저장되는 실제 값(변수 이름)
      pw: pw,
      age: age,
    });

    res.json(user); // 삽입된 데이터를 그대로 응답
  } catch {
    next(err); // 에러처리 미들웨어
  }
});

module.exports = router;
