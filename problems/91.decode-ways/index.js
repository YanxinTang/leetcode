/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const isValidMsg = (a, b) => {
    if (a === '0') {
      return false;
    }
    return parseInt(a + b) <= 26;
  };
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    c = 0;
    if (s[i] !== '0') {
      c += b;
    }
    if (i > 0 && s[i - 1] !== '0' && isValidMsg(s[i - 1], s[i])) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
};

export default numDecodings;
