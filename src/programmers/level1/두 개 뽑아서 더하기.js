function solution(numbers) { //5
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {// 2
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j])
    }
  }

  return answer.sort((a, b) => a-b).filter((e,i) => answer.indexOf(e) === i);
}

console.log(solution([2,1,3,4,1]))