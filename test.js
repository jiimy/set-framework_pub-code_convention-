function sum(a, b) {
  // a와 b가 number 타입인지 체크
  if (getType(a) !== 'Number' || getType(b) !== 'Number') {
    throw new TypeError('파라미터 a 또는 b에 number 타입이 아닌 값이 할당되었습니다.');
  }
  return a + b;
}

console.log(sum('10',20));