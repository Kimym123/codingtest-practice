function solution(board, moves) {
  var answer = 0;
  const arr = [];

  moves.forEach(e => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][e-1] !==0) {``
        if (arr[arr.length-1] === board[i][e-1]) { // 이 부분이 핵심. arr에 push 하기 전 판별하는 로직!
          answer += 2;
          arr.pop();
        } else {
          arr.push(board[i][e-1])
        }
        board[i][e-1] = 0
        break;
      }
    }
  })
  return answer;
}

console.log(solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
  ],
  [1, 5, 3, 5, 1, 2, 1, 4])) // 4

// 4 3 1 1 3 2 x 4