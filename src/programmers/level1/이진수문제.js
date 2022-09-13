function solution(n, k) {
  let number = Math.pow(2, n)-1;
  const stack = [];
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      stack.push(i.toString(2).padStart(n,0))
    }
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i].match(/1/gi).length === k) {
      count++
    }
  }

  return count;
}

console.log(solution(4, 2))
