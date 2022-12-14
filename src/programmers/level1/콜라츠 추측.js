function solution(num) {
  var answer = 0;

  while (num > 1 && answer !== 500) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num = (num *3) +1;
    }
    answer += 1;
  }

  return answer >= 500 ? -1 : answer;
}

console.log(solution(16))