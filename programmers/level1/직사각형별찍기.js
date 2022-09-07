process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  const star = '*'.repeat(a)
  for (let i = 0; i<b;i++) {
    console.log(star);
  }
});


// function asd(x, y) {
//   const a = x, b = y
//   const star = '*'.repeat(a)
//   for (let i = 0; i<b;i++) {
//     console.log(star);
//       }
// }
//
// console.log(asd(5, 4))