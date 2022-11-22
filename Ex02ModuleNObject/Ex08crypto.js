const crypto = require("crypto");

// 1. 단방향 암호화 : 복호화할 수 없는 암호화 방식(해시함수)

// pbkdf2 -> node에서 지원하는 비밀번호 암호화 알고리즘
// salt 라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용

// 어떤 길이의 문자열로 바꿀건지 지정
//                64바이트 길이 문자열 생성
crypto.randomBytes(64, (err, buf) => {
  // buf가 가진 toString 사용
  const salt = buf.toString("base64");
  console.log("salt : ", salt);

  // 알고리즘 사용시 넣어줘야 할 파라미터 존재
  // 사용할 비밀번호, salt문자열, 알고리즘 적용 반복 횟수, 출력바이트, 해시알고리즘
  crypto.pbkdf2("password123", salt, 100000, 64, "sha512", (err, key) => {
    console.log("패스워드 : ", key.toString("base64"));
  });
});

// 2. 양방향 암호화 : 암호화된 문자열을 복호화할 수 있음, 키가 사용됨
const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxtz123456";
const iv = "1234567890123456"; //암호화 시 사용되는 초기화 벡터

// cipher => 암호화 해주는 것
const cipher = crypto.createCipheriv(algorithm, key, iv);

// 암호화할 문장, 인코딩, 출력인코딩(출력바이트)
let result = cipher.update("암호화할 문장", "utf-8", "base64");
result += cipher.final("base64"); // 마지막에 출력 결과물 인코딩 넣으면 암호화 완료
console.log("암호화 : ", result);

// decipher => 복호화 해주는 것
const decipher = crypto.createDecipheriv(algorithm, key, iv);
// 복호화할 문장, 인코딩(base64), 출력인코딩(utf-8)
// 인코딩 값 순서는 암호화 때 순서의 반대로!!
let result2 = decipher.update(result, "base64", "utf-8");
result2 += decipher.final("utf-8");
console.log("복호화 : ", result2);
