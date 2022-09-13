function solution(n, lost, reserve) {
  let tmp = reserve.slice()
  lost.sort((a,b) => a-b)
  reserve.sort((a,b) => a-b)

  // lost와 reserve가 중복 되는 부분을 빼주는 역할. -> 애초에 자기 것 하나만 갖고 있기 때문에 아예 배제시킴.
  for (let i in tmp) {
    let key = lost.indexOf(tmp[i])

    if (key != -1) {
      lost.splice(key, 1);
      reserve.splice(reserve.indexOf(tmp[i]), 1);
    }
  }

  for (let i of reserve) {
    let key = lost.includes(i-1) ? lost.indexOf(i-1) : lost.indexOf(i+1)

    if (key != -1) {
      lost.splice(key, 1)
    }
  }

  return n - lost.length
}

console.log(solution(7, [2,3,4], [1,2,3,6]))