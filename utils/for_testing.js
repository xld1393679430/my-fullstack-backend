const palindrome = (string) => {
  return string.split('').reverse().join('')
}

const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }
  const len = array.length
  return len === 0
    ? 0
    : array.reduce(reducer, 0) / len
}

module.exports = {
  palindrome,
  average
}