function solution(a, b) {
  var answer = '';

  const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const date = new Date(`2016-${a}-${b}`)

  return week[date.getDay()];
}