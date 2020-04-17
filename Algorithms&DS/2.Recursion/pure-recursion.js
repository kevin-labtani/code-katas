function collectOddValues(arr) {
  // the array starts empty everytime we run through the function
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // it eventually concat all the odd values starting with an empty array
  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
