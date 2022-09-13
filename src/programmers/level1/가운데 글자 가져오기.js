function solution(s) {
  const word = s.split("");

  if (word.length % 2 !== 0){
    return word[Math.ceil(word.length/2)-1]
  } else {
    return word[Math.ceil(word.length/2)-1] + word[Math.ceil(word.length/2)]
  }
}
console.log(solution("abcde"))