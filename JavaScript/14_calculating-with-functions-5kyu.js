function zero(param = "") {
  let str = "".concat(0, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function one(param = "") {
  let str = "".concat(1, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function two(param = "") {
  let str = "".concat(2, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function three(param = "") {
  let str = "".concat(3, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function four(param = "") {
  let str = "".concat(4, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function five(param = "") {
  let str = "".concat(5, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function six(param = "") {
  let str = "".concat(6, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function seven(param = "") {
  let str = "".concat(7, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function eight(param = "") {
  let str = "".concat(8, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}
function nine(param = "") {
  let str = "".concat(9, param);
  return str.length === 3 ? Math.floor(eval(str)) : str;
}

function plus(param = "") {
  return "".concat("+", param);
}
function minus(param = "") {
  return "".concat("-", param);
}
function times(param = "") {
  return "".concat("*", param);
}
function dividedBy(param = "") {
  return "".concat("/", param);
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(dividedBy(three()))); //2

// alt solution
// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };

// or 

// var n = function(digit) {
//   return function(op) {
//     return op ? op(digit) : digit;
//   };
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) {
//   return function(l) {
//     return l + r;
//   };
// }
// function minus(r) {
//   return function(l) {
//     return l - r;
//   };
// }
// function times(r) {
//   return function(l) {
//     return l * r;
//   };
// }
// function dividedBy(r) {
//   return function(l) {
//     return l / r;
//   };
// }