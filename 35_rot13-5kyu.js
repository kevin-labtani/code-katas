// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let mapIn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let mapOut = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  let answer = "";
  for (let i = 0; i < message.length; i++) {
    answer += mapIn.includes(message[i])
      ? mapOut[mapIn.indexOf(message[i])]
      : message[i];
  }
  return answer;
}

console.log(rot13("Grfg"), "Test");
console.log(rot13("Codewars"), "Pbqrjnef");
console.log(rot13("10+2 is twelve."), "10+2 vf gjryir.");

// alt solution
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
// }