// function solution(n) {
//   let ternary = n.toString(3).split('').reverse().join('')
//   return parseInt(ternary, 3);
// }

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3)
}

console.log(parseInt(12, 3))