// Recursive Version
function countDown(num) {
  // base case
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  // recursive call with different input
  num--;
  countDown(num);
}
countDown(3);

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}
