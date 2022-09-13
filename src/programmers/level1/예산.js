function solution(d, budget) {
  return d.sort((a,b) => a-b).reduce((acc, curr) => {
    (budget -= curr) >= 0 ? acc++ : acc
    return acc
  },0)
}

// a : 1 2 3 4 5
console.log(solution([1, 3, 2, 5, 4], 9))