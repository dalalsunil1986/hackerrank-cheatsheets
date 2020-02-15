/**
 * https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

 const MinimumSwaps = (arr) => {
  let countSwap = 0
  let i = 0
  while(i < arr.length) {        
      const index = i % arr.length
      const temp = arr[index]
      if(temp !== index + 1) {
          let j = i
          while(j < arr.length) {
              if(arr[j] === index+1) {
                  countSwap++
                  arr[index] = arr[j]
                  arr[j] = temp
                  break
              }
              j++
          }            
      }
      i++
  }
  return countSwap
 }

 console.log(minimumSwaps([1,3,5,2,4,6,7]))

 /**
  * This function work more than the expected result
  * because i put some optimization as i use in GhackSort.
  * If the required function need 46 swap, this function only need 40.
  */
 const MinimumSwaps2 = (arr) => {
  let i = 0
  let fitnes = ''
  let count = 0
  while(true) {    
    if(fitnes.split('0').length - 1 === arr.length) {
      break
    }
    if(fitnes.length === arr.length) {
      fitnes = ''  
    }
    const index = i % arr.length
    const temp = arr[index]
    const delta = temp - (index + 1)
    if(delta !== 0) {
      arr[index] = arr[index+ delta]
      arr[index + delta] = temp
      count++
    }
    fitnes += (arr[index] - (index + 1)).toString()
    i++
  }
  return count
 }
