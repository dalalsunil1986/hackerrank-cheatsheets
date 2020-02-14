/**
 * https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

function minimumBribes(q) {
  const CHAOS_THRESHOLD = 2
  let chaos = 0
  for(let j = 0; j < q.length; j++) {
      if(parseInt(q[j]) - (j + 1) > CHAOS_THRESHOLD) {
          console.log('Too chaotic\n')
          return 
      } else {
         for(let k = q[j] - 2; k < j; k++) {
             if(q[k] > q[j]) {
                 chaos += 1
             }
         }
      }
  }
  
  console.log(chaos.toString()+'\n')
}

minimumBribes('1 2 5 3 7 8 6 4'.split(' '))