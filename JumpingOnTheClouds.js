/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function jumpingOnClouds(c) {
  let jumpCount = 0
  let i = 0
  const THUNDERHEAD = 1
  while(i < c.length) {
      const nextTwo = i + 2
      const nextOne = i + 1
      if(c[nextTwo] !== THUNDERHEAD && nextTwo < c.length) {
          i = nextTwo
          jumpCount += 1
      } else if(c[nextOne] !== THUNDERHEAD && nextOne < c.length) {
          i = nextOne
          jumpCount += 1
      } else if(nextOne >= c.length) {
        i += 1
      } else {
        console.log('This game is impossible.')
        break
      }
  }
  return jumpCount
}

const inp = "0 0 1 0 1 0".split(" ").map(value => parseInt(value))

console.log(jumpingOnClouds(inp))