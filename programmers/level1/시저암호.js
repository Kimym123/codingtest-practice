function solution(s, n) {
  var answer = [];

  for (let i = 0; i< s.length; i++) {
    answer.push((s.charCodeAt(i)+n))
  }

  return answer.map((e,i) => String.fromCharCode(e)).join('');
}

console.log(solution("AB",1))