/**
 * https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

 /**
  * This approach is still wrong to handle 1 character anagram.
  * Maybe i will try to use recursive approach to generate
  * all posible permutations.
  */
function calculateCodeSum(s) {
  return s.split("").reduce((state, value) => {
    return state + value.charCodeAt(0)
  }, 0)
}

function sherlockAndAnagrams(s) {
  let total = 0
  const result = {}
  const collected = {}
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1)
      const codeSum = calculateCodeSum(sub)      
      if(result[codeSum]) {
        result[codeSum] += 1
      } else {
        result[codeSum] = 1
      }
      if(result[codeSum] > 1) {
        console.log(sub)
        total += 1
      }
    }      
  }  
  
  for(const key in result) {
    if(result.hasOwnProperty(key)) {
      const value = result[key]
      if(value > 1) {
        collected[key] = value
      }
    }
  }
  console.log(collected)
  return total
}

console.log(sherlockAndAnagrams("kkkk"))
// console.log(calculateCodeSum("ab"))