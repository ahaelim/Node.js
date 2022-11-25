const express = require("express");
const router = express.Router();
const db_config = require("../config/database");

// conn 객체를 얻을 수 있음
let conn = db_config.init();

// conn을 가지고 실제로 연결을 해줌
db_config.connect(conn);

// index.html을 보여주는 것
router.get("/select", (req, res) => {
  let sql = "select * from member";

  conn.query(sql, function (err, rows, fields) {
    console.log(rows);
    console.log(fields);
    if (err) {
      console.log("select 실행 실패 : " + err);
    } else {
      // list라는 이름으로 rows 데이터 들을 담아줌
      res.render("index", { list: rows });
    }
  });
});

// => 여기까지 db와 연결완료!!

router.post("/insert", (req, res) => {
  // body에 담긴 정보 가져와야함 (app.js에서 파싱필요)
  let { id, pw, nick } = req.body;
  // 받아온 값을 테이블에 넣기 (sql문 사용)
  // 바뀌는 자리는 '?' 사용
  let sql = "insert into member values(?,?,?)";
  // sql문 , 물음표 안에 들어갈 값을 배열에 순서대로 넣기
  // , sql문 실행해서 결과처리 어떻게 해줄지 =>  함수로 정의
  conn.query(sql, [id, pw, nick], function (err, rows, fields) {
    console.log(rows); // 영향을 받은 row에 대한 정보
    console.log(fields); // row의 자세한 메타데이터

    if (err) {
      //실패
      console.error("insert 실행 실패! : " + err);
    } else {
      //성공
      res.redirect("/select");
    }
  });
});

// 특정회원 정보만 조회하기
router.get("/select/:id", (req, res) => {
  let id = req.params.id;

  let sql = "select * from member where id = ?";
  conn.query(sql, [id], function (err, rows, fields) {
    console.log(rows);
    console.log(fields);

    if (err) {
      console.error("select 실행 실패 : " + err);
    } else {
      // json형태로 응답
      res.json({ listone: rows });
    }
  });
});

// 회원 삭제
// restful하게 작성하기 위헤서 요청을 구분해주는게 좋다
router.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  let sql = "delete from member where id = ?";
  conn.query(sql, [id], function (err, rows, fields) {
    console.log(rows);
    console.log(fields);

    if (err) {
      console.error("delete 실행 실패 : " + err);
    } else {
      res.redirect("/select");
    }
  });
});

// 회원 정보 수정하기
router.post("/update", (req, res) => {
  let { id, pw, nick } = req.body;
  let sql = "update member set  pw=?, nick=? where id=?";
  conn.query(sql, [pw, nick, id], function (err, rows, fields) {
    if (err) {
      console.error("update 실행 실패 : " + err);
    } else {
      res.redirect("/select");
    }
  });
});

// router 내보내기
module.exports = router;
