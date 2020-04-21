// given two positive intt, find out if the two numbers have the same frequency of digits in O(N) time

function sameFrequency(int1, int2) {
  let str1 = int1.toString();
  let str2 = int2.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let num = str1[i]; // set the num we're currently itterating to a variable for cleaner code
    frequencyCounter1[num]
      ? (frequencyCounter1[num] += 1)
      : (frequencyCounter1[num] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let num = str2[i]; // set the num we're currently itterating to a variable for cleaner code
    frequencyCounter2[num]
      ? (frequencyCounter2[num] += 1)
      : (frequencyCounter2[num] = 1);
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281), true);
console.log(sameFrequency(34, 14), false);
