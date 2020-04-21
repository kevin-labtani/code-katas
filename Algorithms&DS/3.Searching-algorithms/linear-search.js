// the function accepts an array and a value
// loop through the entire array and check if the current array element is equak to the value
// if it is, return the index at which the element is found
// if the value is never found, return -1

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([30, 15, 20, 25, 10], 25), 3);
console.log(linearSearch([10, 3, 20, 25, 30], 15), -1);
