// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(str) {
  return str.trim().replace(/\s/g, "");
}

console.log(noSpace("    8 j 8   mBliB8g  imjB8B8  jl  B"));
