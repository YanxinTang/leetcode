/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }
  return i === s.length;
};

export default isSubsequence;
