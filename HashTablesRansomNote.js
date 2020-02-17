/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 */

function checkMagazine(magazine, note) {
  const a = magazine.join(" ")
  const b = note.join(" ")
  const c = [...new Set(note)]
  for(let i = 0; i < c.length; i++) {
      const word = c[i]
      const k = a.split(word).length - 1
      const l = b.split(word).length - 1
      if(k < l) {
        console.log('No')
        return
      }
  }
  console.log("Yes")
}

const mag = "apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg".split(" ")
const n = "elo lxkvg bg mwz clm w".split(" ")

checkMagazine(mag, n)