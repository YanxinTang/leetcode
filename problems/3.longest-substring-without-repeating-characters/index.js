/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let l = 0, r = 1, max = 1;
  while(r < s.length) {
    for (let i = l; i < r; i++) {
      if (s[i] === s[r]) {
        l = i+1;
      }
    }
    r++
    max = r - l > max ? r - l : max;
  }
  return max;
};

export default lengthOfLongestSubstring;