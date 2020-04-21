// accepts a variable number of args and check whether there are any duplicates

function areThereDuplicates() {
  let obj = {};
  for (const val in arguments) {
    obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  // console.log(obj);
  return false;
}

console.log(areThereDuplicates(1, 2, 3), false);
console.log(areThereDuplicates(2, 2, 3), true);
