// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = str[0];
  const group = new Map();

  for (let c of str) {
    group.set(c, group.get(c) + 1 || 1);
  }

  for (let k of group.keys()) {
    if (group.get(k) > group.get(max)) {
      max = k;
    }
  }

  return max;
}

module.exports = maxChar;
