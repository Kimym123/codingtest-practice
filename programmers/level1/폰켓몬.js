// function solution(nums) {
//   var answer = [];
//   var max = nums.length / 2;
//
//   for(let i = 0; i < nums.length; i++) {
//     if(answer.length < max) {
//       if(!answer.includes(nums[i])) {
//         answer.push(nums[i]);
//       }
//     }
//   }
//
//   return answer.length;
// }
// const solution = nums => {
//   let answer = [];
//   const max = nums.length / 2;
//
//   nums.map(num => (
//     answer.length < max && !answer.includes(num) ? answer.push(num) : num
//   ));
//
//   return answer.length;

function solution(nums) {
  var answer = 0;
  let max = nums.length / 2;

  const set = new Set(nums);

  answer = (set.size > max) ? max : set.size

  return set;
}

console.log(solution([3,1,2,3]))