/**
 * https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
 */

 /**
  * This function is work. but we need to optimize
  * the time complexity because it will take to long time to execute.
  * and it will fail the test.
  */
function arrayManipulation(n, queries) {
  let highest = 0
  let arr = [...new Array(n)].fill(0)
  for(let i = 0; i < queries.length; i++) {
      const a = queries[i][0] - 1
      const b = queries[i][1] - 1
      const k = queries[i][2]

      for(let j = a; j <= b; j++) {
          const result = arr[j] + k
          if(result > highest) {
              highest = result
          }
          arr[j] = result
      }
  }

  return highest
}

/**
 * I optimized this code by using 'prefix sum algorithm'.
 * watch this : https://www.youtube.com/watch?v=hDhf04AJIRs . 
 * That guy explained about it very well. :D
 */
function arrayManipulationOptimized(n, queries) {
  let arr = [...new Array(n)].fill(0)
  queries.forEach(q => {
    const a = q[0] - 1
    const b = q[1] - 1
    const k = q[2]

    arr[a] += k
    if(b + 1 < n) {
      arr[b + 1] -= k
    }
  })

  let highest = 0
  let count = 0
  arr.forEach(value => {
    count += value
    if(count > highest) {
      highest = count
    }
  })

  return highest
}

const q = [
  [1,2,100],
  [2,5,100],
  [3,4,100],
]

console.log(arrayManipulationOptimized(5, q))