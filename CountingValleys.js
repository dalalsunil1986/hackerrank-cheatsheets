/**
 * https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
 */

function countingValleys(n, s) {
  const arr = s.split("")
  let valleyCount = 0
  let altitude = 0
  const DOWN_STEP = "D"
  arr.forEach(s => {        
      let newAltitude = s === DOWN_STEP ? altitude - 1 : altitude + 1      
      if(newAltitude === 0 && altitude < 0) {        
          valleyCount += 1
      }
      altitude = newAltitude
  })
  return valleyCount
}

const inp = "UDDDUDUU"

console.log(countingValleys(inp.length, inp))