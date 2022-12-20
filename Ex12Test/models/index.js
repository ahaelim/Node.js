const Sequelize = require("sequelize");
const Book = require("./book");
const env = "development";
const config = require("../config/config")[env];

// db 연결 정보
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {}; // sequelize, object;

//   key      value(db정보)
db.sequelize = sequelize;
//  init, associate가지고 있음
db.Book = Book; // db와 테이블 연결

// static이라 바로 호출 가능
Book.init(sequelize); // 테이블 초기화
Book.associate(db); // 관계 설정

module.exports = db;
