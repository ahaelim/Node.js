setImmediate(() => {
  // 3. 즉시 실행하고 싶을 때 권장하는 함수
  console.log("immediate!");
});

setTimeout(() => {
  // 2. 몇초 후에 실행할때 쓰는 기능,
  //    0쓰면 immediate보다 빠르긴 하지만
  //    빠르게 실행하려고하는 기능X
  console.log("timeout");
}, 0);

process.nextTick(() => {
  // 1. 이벤트 루프가 다른 함수보다 우선으로 처리하도록 만듦
  //    immediate보다 더 빠르게 사용하고 싶을때!
  console.log("nextTick");
});
