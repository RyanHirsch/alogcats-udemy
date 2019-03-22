// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const strArray = str.split("");
  const last = strArray.length - 1;
  for (let i = 0; i < strArray.length / 2; i++) {
    const tmp = strArray[i];
    strArray[i] = strArray[last - i];
    strArray[last - i] = tmp;
  }
  return strArray.join("");
}

module.exports = reverse;
