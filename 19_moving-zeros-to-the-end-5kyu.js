// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  // console.log(arr);
  let zeroArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      zeroArr.push(arr[index]);
      arr.splice(index, 1);
      index--; // deinc to account for the splice that changed the array
    }
  }
  return arr.concat(zeroArr);
}

console.log(
  JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
  JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
);
console.log(
  JSON.stringify(
    moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
  ),
  JSON.stringify([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);

// alt solution
// var moveZeros = function(arr) {
//   var filtedList = arr.filter(function(num) {
//     return num !== 0;
//   });
//   var zeroList = arr.filter(function(num) {
//     return num === 0;
//   });
//   return filtedList.concat(zeroList);
// };
