/**
 * @author Galih Laras Prakoso
 * I invent this sort by my self. I don't know if there is another
 * sorting algorithm like this. :p LOL. If you know, please tell me.
 * This is only works with array that contains complete number sequence
 * respec to the index + 1.
 */


const GhackSort = (arr) => {
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
  return arr
}

console.log(GhackSort([1,3,5,2,4,6,7]))

