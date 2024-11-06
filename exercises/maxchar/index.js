// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {
  if (!str.length) return;
  const charMap = {}
  let currChar = str[0];
  let currMax = 0

  for (let char of str) {
    const freq = (charMap[char] ?? 0) + 1
    charMap[char] = freq

    if (freq > currMax) {
      currMax = freq
      currChar = char
    }
  }

  return currChar
}

module.exports = maxChar;
