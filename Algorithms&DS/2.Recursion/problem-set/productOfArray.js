// return the product of all the number in the array

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

// solution
// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }


console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

