// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const lower = str.split("");
  const last = lower.length - 1;

  for (let i = 0; i < lower.length / 2; i++) {
    if (lower[i] !== lower[last - i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
