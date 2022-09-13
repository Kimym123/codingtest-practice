// 이진 배열이 주워졌을 때 배열에서 연속하는 최대수를 반환합니다.
var findMaxConsecutiveOnes = function(nums) {
  let answer = 0;
  let max = 0;

  for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] === 1) {
      ++max
      if (answer < max) {
        answer = max;
      }

    } else {
      max = 0
    }
  }
  return answer
};