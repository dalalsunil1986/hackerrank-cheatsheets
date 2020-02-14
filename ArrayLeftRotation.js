
/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
 */

function rotLeft(a, d) {
  const shifted = []
  for(let i = 0; i < a.length; i++) {
      shifted.push(a[(i + d) % a.length])
  }
  return shifted
}

