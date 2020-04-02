// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[^a-zA-Z0-9])(?=.{6,})/.test(password);
}

console.log(validate("djI38D55"), "djI38D55 true");
console.log(validate("a2.d412"), "a2.d412 false");
console.log(validate("JHD5FJ53"), "JHD5FJ53 false");
console.log(validate("!fdjn345"), "!fdjn345 false");
console.log(validate("jfkdfj3j"), "jfkdfj3j false");
console.log(validate("123"), "123 false");
console.log(validate("abc"), "abc false");
console.log(validate("Password123"), "Password123 true");

// alt solution
// function validate(password) {
//   return (
//     /^[A-Za-z0-9]{6,}$/.test(password) &&
//     /[A-Z]+/.test(password) &&
//     /[a-z]+/.test(password) &&
//     /[0-9]+/.test(password)
//   );
// }


// function validate(password) {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
// }