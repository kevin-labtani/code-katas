// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(num) {
  console.log(num);
  let sum = 0;
  for (let index = num - 1; index > 0; index--) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

console.log(solution(10), 23);
console.log(solution(11), 33);
console.log(solution(-1), 0);

// alt solution
// function solution(number) {
//   var sum = 0;

//   for (var i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
