// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  let set = new Set(arr);
  let obj = {};
  for (let value of set) {
    let counter = 0;
    arr.forEach(element => {
      if (element === value) {
        counter++;
      }
    });
    obj[value] = counter;
  }
  for (let [key, val] of Object.entries(obj)) {
    if (val % 2 === 1) {
      return parseInt(key);
    }
  }
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);

// alt solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// other alt
// function findOdd(A) {
//   var obj = {};
//   A.forEach(function(el) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   });

//   for (prop in obj) {
//     if (obj[prop] % 2 !== 0) return Number(prop);
//   }
// }
