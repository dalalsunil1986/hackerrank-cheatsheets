/**
 * https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
 */

function compare(temp, s) {
  for(let i = 0; i < temp.length; i++) {
      const c = temp[i]
      if(s.includes(c)) {            
          return "YES"
      }
  }
  return "NO"
}

function twoStrings(s1, s2) {
  const s1length = s1.length;
  const s2length = s2.length;
  let result
  if(s1length < s2length) {
      const temp = s1.split('');
      result = compare(temp, s2)
  } else {
      const temp = s2.split('');
      result = compare(temp, s1)
  }
  return result
}

console.log(twoStrings("hello", "world"))