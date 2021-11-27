import tribonacci from './index';

test('1137. 第 N 个泰波那契数', () => {
  expect(tribonacci(3)).toBe(2);
  expect(tribonacci(4)).toBe(4);
  expect(tribonacci(25)).toBe(1389537);
});
