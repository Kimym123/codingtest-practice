function solution(s) {

  return s.toLowerCase().split(' ').map((e) => e.split('').map((e, i) => (i + 1) % 2 !== 0 ? e.toUpperCase() : e).join('')).join(' ')
}

console.log(solution("try hello world"	))