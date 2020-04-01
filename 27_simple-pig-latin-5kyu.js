// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str) {
  let arr = str.split(" ");
  arr.forEach((el, i) => {
    if (/\W/.test(el)) return;
    arr[i] = el.slice(1) + el[0] + "ay";
  });
  return arr.join(" ");
}

console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
console.log(pigIt("Hello world !"), "elloHay orldway !");
