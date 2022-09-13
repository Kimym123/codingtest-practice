function solution(s) {
  const arr = s.split("")
  var answer = arr.reverse().join("");
  return answer;
}

console.log(solution("Zbcdefg"	))