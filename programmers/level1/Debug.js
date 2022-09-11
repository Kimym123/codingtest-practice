function solution(arr) {
  let m;
  return m = arr.reduce((p, c) => Math.min(p, c))
}

console.log(solution([4,3,2,1]))