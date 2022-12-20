const express = require("express");
const Book = require("../models/book");
const router = express.Router();

// 도서 추가
router.post("/insert", async (req, res, next) => {
  let { num, title, author, company, isbn, count } = req.body;
  try {
    const book = await Book.create({
      num: num,
      title: title,
      author: author,
      company: company,
      isbn: isbn,
      count: count,
    });

    res.json(book);
  } catch (err) {
    next(err);
  }
});

// 도서 전체 확인
router.get("/selectall", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

// 특정 도서 확인
router.get("/select/:num", async (req, res, next) => {
  try {
    const book = await Book.findOne({
      where: { num: req.params.num },
    });
    res.json(book);
  } catch (err) {
    next(err);
  }
});

// 도서 정보 수정
router.patch("/update/:num", async (req, res, next) => {
  try {
    const result = await Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        company: req.body.company,
        isbn: req.body.isbn,
        count: req.body.count,
      },
      {
        where: { num: req.params.num },
      }
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// 도서 삭제
router.delete("/delete/:num", async (req, res, next) => {
  try {
    const result = await Book.destroy({
      where: { num: req.params.num },
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
