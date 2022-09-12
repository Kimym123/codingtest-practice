function solution(participant, completion) {
  var answer = [];

  participant.sort();
  completion.sort();

  for (let i =0; participant.length;i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))