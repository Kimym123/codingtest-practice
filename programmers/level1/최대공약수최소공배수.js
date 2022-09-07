function solution(n, m) {
  // 최대공약수 함수
  const gcd = (a,b) => {
    if ( b === 0) { // 나머지가 0이 되면 나눈 수를 반환.
      return a
    }
    return gcd(b, a % b) // 나머지가 0이 아니면 재귀로 함수를 실행한다.
  }
  // 최소공배수 함수
  const lcm = (a,b) => (a*b) / gcd(a,b)

  return [gcd(n,m), lcm(n,m)];
}

console.log(solution(5,7))
console.log(5%2)