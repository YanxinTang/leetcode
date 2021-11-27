import lengthOfLongestSubstring from './index';

test('3. 无重复字符的最长子串', () => {
  expect(lengthOfLongestSubstring('')).toBe(0);
  expect(lengthOfLongestSubstring(' ')).toBe(1);
  expect(lengthOfLongestSubstring('abcd')).toBe(4);
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
