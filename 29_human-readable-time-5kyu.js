// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds % 60;
  hours = padding(hours);
  minutes = padding(minutes);
  seconds = padding(seconds);
  return hours + ":" + minutes + ":" + seconds;
}

function padding(str) {
  str = str.toString();
  if (str.length === 1) {
    return "0" + str;
  }
  return str;
}

console.log(humanReadable(0), "00:00:00", "humanReadable(0)");
console.log(humanReadable(5), "00:00:05", "humanReadable(5)");
console.log(humanReadable(60), "00:01:00", "humanReadable(60)");
console.log(humanReadable(86399), "23:59:59", "humanReadable(86399)");
console.log(humanReadable(359999), "99:59:59", "humanReadable(359999)");


// alt
// var hours = parseInt(seconds / 3600);
// var minutes = parseInt(seconds / 60) % 60;
// var seconds = seconds % 60;