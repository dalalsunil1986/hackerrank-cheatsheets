/**
 * https://www.hackerrank.com/challenges/2d-array?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function hourglassSum(arr) {
  const HOURGLASS_PATTERN = [
      [1,1,1],
      [0,1,0],
      [1,1,1]
  ]
  const results = {}
  for(let i=0; i < arr.length; i++) {
      for(let j=0; j < arr[0].length; j++) {
          if(i + HOURGLASS_PATTERN[0].length - 1 < arr[0].length) {
              if(j + HOURGLASS_PATTERN.length - 1 < arr.length) {
                  let result = 0
                  let hourglass = []
                  for(let k=0; k < HOURGLASS_PATTERN.length; k++) {
                      let row = []
                      for(let l=0; l < HOURGLASS_PATTERN[0].length; l++) {
                          const pattern = HOURGLASS_PATTERN[k][l]
                          const value = arr[i + k][j + l]
                          result += value * pattern
                          row.push(value)
                      }
                      hourglass.push(row)
                  }
                  results[result] = hourglass
              }
          }
      }
  }
  let highest = Number.MIN_SAFE_INTEGER
  for(const key in results) {
      if(results.hasOwnProperty(key)) {
          if(parseInt(key) > highest) {
              highest = parseInt(key)
          }
      }
  }

  return highest
}

const arr = [
  [-1,-1,0,-9,-2,-2],
  [-2,-1,-6,-8,-2,-5],
  [-1,-1,-1,-2,-3,-4],
  [-1,-9,-2,-4,-4,-5],
  [-7,-3,-3,-2,-9,-9],
  [-1,-3,-1,-2,-4,-5, ],
]

console.log(hourglassSum(arr))
