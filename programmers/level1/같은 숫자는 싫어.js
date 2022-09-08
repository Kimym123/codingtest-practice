function solution(arr)
{
  var answer = arr.filter((e, i) => e !== arr[i+1]);

  return answer;
}

console.log(solution([4, 4, 4, 3, 3]))