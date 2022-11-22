// console 객체의 time => label 지정해줘야함
// => 특정 레이블에 해당하는 time~timeEnd 사이의 시간 측정
console.time("전체 시간");
console.log("일반 로그");
console.error("에러 메세지");
console.table([
  { name: "아해", age: 29 },
  { name: "준헌", age: 29 },
]);

const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

// 옵션 주기 ,{}
console.dir(obj, { colors: false, depth: 2 }); // depth 기본값 2
console.dir(obj, { colors: true, depth: 1 });

// time에 썼던 label 그대로 써주면 됨
console.timeEnd("전체 시간");
