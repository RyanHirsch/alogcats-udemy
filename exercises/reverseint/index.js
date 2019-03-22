// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = Math.abs(n);
  let reversed = 0;

  for (let i = 0; num > 0; i++) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);
    reversed = reversed * 10 + lastDigit;
  }
  return Math.sign(n) * reversed;
}

module.exports = reverseInt;
