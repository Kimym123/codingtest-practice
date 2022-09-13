function solution(n, queries) {
  const shareStack = new Array(n).fill(0).map(() => new Array(0));
  let count = 0;
  const isEmpty = shareStack.forEach(e => {
    if (e.length===0) {
      count++;
    }
  }) === 0;

  function push(i, x) {
    for (let i = 0; i < n; i++){
      shareStack[i].push(x)
    }
  }

  shareStack[0].push(1)


  return shareStack.forEach((e) => e);
}

console.log(solution(3))