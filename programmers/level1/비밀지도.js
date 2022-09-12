function solution(n, arr1, arr2) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = (arr1[i] | arr2[i]).toString(2).padStart(n, 0)
  }

  return arr.map((e) => e.split('').map(e => e === "1" ? e = "#" : e = " ").join(''))
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))