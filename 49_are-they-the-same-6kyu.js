function comp(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  // find the squared value in the 2nd array and then remove it from the array
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(Math.pow(arr1[i], 2));
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

console.log(comp(a1, a2), true);
console.log(comp([2, 2, 3], [4, 9, 9]), false); // false (need same frequency)
console.log(comp([2, 2, 3], [4, 4, 9]), true); // false (need same frequency)
