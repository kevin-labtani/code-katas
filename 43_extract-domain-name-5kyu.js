// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

// fails on last one
// function domainName(url) {
//   return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];
// }

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(
  domainName(" https://www.jvy-m-52s-q9jwc2t.net"),
  "jvy-m-52s-q9jwc2t"
);
