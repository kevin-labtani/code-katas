// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let delta = 0;
  let parArr = parens.split("");
  for (let i = 0; i < parArr.length; i++) {
    parArr[i] === "(" ? delta++ : delta--;
    if (delta < 0) return false;
  }
  return delta === 0;
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses(")(()))"), false);
console.log(validParentheses("(())((()())())"), true);
console.log(validParentheses("())(()"), false);
