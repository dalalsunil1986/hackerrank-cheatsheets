/**
 * https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
function repeatedString(s, n) {
  const SEARCH_TERM = "a"
  let aCount = s.split(SEARCH_TERM).length - 1
  const a = parseInt(n / s.length) * aCount
  const b = s.substring(0, (n % s.length)).split(SEARCH_TERM).length - 1
  return a + b
}

console.log(repeatedString("aba", 10))