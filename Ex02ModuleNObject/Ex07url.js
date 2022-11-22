// url 모듈 가지고 오기
const { URL } = require("url");

// url 생성자 활용
const myURL = new URL(
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5+%EC%9D%BC%EC%A0%95"
);

// url의 전체 쿼리 확인
console.log("searchParams : ", myURL.searchParams);

// 특정 키의 값 확인
console.log("searchParams.get() : ", myURL.searchParams.get("query"));

// colors = red, orange
// (여러개의 값을 가진 키가 가진 모든 값 다가져오고 싶을 때)
// getAll()

// 키가 특정 키를 가지고 있는지 확인(true, false)
console.log("searchParams.has() : ", myURL.searchParams.has("page"));

// 쿼리의 모든 키나, 값을 가져오고 싶을 때
console.log("searchParams.keys() : ", myURL.searchParams.keys());
console.log("searchParams.values() : ", myURL.searchParams.values());

// 쿼리에 키와 값 추가 : append
myURL.searchParams.append("key", "value1");
myURL.searchParams.append("key", "value2");
console.log(myURL.searchParams.getAll("key")); // value1, value2

// 값 자체 세팅(값을 바꿀 때) : set
myURL.searchParams.set("key", "value3");
console.log(myURL.searchParams.getAll("key")); // value3

// 임의적으로 키를 지울 때 : delete
myURL.searchParams.delete("key");
console.log(myURL.searchParams.getAll("key"));

// 객체형태가 아닌, url주소 그대로 꺼내오고 싶을 때 : toString
console.log("searchParams.toString() : ", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString(); // 공간에 담아 사용가능
