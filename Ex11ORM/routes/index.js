// 라우터
const express = require("express");
const User = require("../models/user");
const router = express.Router(); // 라우터 사용

router.post("/insert", async (req, res, next) => {
  // id, pw, age 데이터 받기
  console.log(req.body);
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
  } catch (err) {
    next(err); // 에러처리 미들웨어
  }
});

// user 모든 값 조회(get)
router.get("/selectall", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/select/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "age"],
      where: { id: req.params.id },
    });

    req.session.login = user;

    res.json(user);
  } catch (err) {
    next(err);
  }
});

// 수정 : patch (data: body)
router.patch("/update", async (req, res, next) => {
  try {
    const result = await User.update(
      {
        // 수정할 값
        pw: req.body.pw,
        age: req.body.age,
      },
      {
        where: { id: req.session.login.id },
      }
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 삭제
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
