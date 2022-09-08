function solution(s){
  var answer = true;

  const arr = s.toLowerCase().split('')
  const numberOfP = arr.filter((e) => 'p' === e).length;
  const numberOfY = arr.filter((e) => 'y' === e).length


  return numberOfP === numberOfY;
}

console.log(solution("pPoooyY"))