function solution(dartResult) {
  const score = [];
  const optArr = [];
  const option = [];
  let answer = 0;

  const dartArr = dartResult.split('')
// 1S2D*3T
  for (let i = 0; i < dartArr.length; i++) {
    if (!isNaN(dartArr[i])) {
      if (dartArr[i] === '0' && dartArr[i - 1] === '1') {
        score.pop();
        score.push(10);
      } else {
        score.push(parseInt(dartArr[i]))
      }
    } else {
      optArr.push(dartArr[i]);
    }
  }

  for (let i = 0; i < optArr.length; i++) {
    if (optArr[i] === "S" || optArr[i] === "D" || optArr[i] === "T") {
      if (typeof optArr[i+1] === "undefined") {
        option.push(optArr[i])
      } else {
        option.push(optArr[i] + optArr[i+1])
      }
    }
  }

  // score [1, 2, 3]
  // option [ 'S*', 'T*', 'S' ]
  for (let i = 0; i < score.length; i++) {
  }

  score.map((e, i) => {
    option[i]
  })

  return answer
}

// s* t* s
// 1 2 3
console.log(solution("1S*2T*3S"))