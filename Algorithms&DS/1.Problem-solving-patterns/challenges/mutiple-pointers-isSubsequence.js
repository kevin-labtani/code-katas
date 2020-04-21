// takes 2 strings and check whether the chars in the first form a subsequence of the chars in the second
function isSubsequence(str1, str2) {
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str2[j] == str1[i]) i++;
    if (i == str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"), true);
console.log(isSubsequence("sing", "sting"), true);
console.log(isSubsequence("abc", "acb"), false); // order matters
