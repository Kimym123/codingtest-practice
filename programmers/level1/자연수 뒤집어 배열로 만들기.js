function solution(n) {
  return n.toString().split('').reverse().map(e => Number(e));
}

console.log(solution(12345))