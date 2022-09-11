function solution(arr) {
  const min = Math.min(...arr)
  return arr.filter((e) => e !== min).length <= 1 ? [-1] : arr.filter((e) => e !== min).length;
}

console.log(solution([4,3,2,1]	))