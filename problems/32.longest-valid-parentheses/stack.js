/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const stack = [-1];
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }
  return ans;
};

export default longestValidParentheses;
