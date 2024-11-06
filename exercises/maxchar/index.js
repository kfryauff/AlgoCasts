// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function getCharMap(str) {
  const charMap = {}
  
  for (let char of str) {
    const freq = (charMap[char] ?? 0) + 1
    charMap[char] = freq
  }

  return charMap
}

function getHighestFrequencyFromCharMap(charMap) {
  return Object.keys(charMap).reduce((accum, val) => {
    if (!accum.length || !charMap[accum]) return val
    if (charMap[accum] < charMap[val]) return val
    return accum
  }, '')
}

function maxChar(str) {
  if (!str.length) return;

  const charMap = getCharMap(str)
  const highestFreq = getHighestFrequencyFromCharMap(charMap)

  return highestFreq?.[0] ?? ''
}

module.exports = maxChar;
