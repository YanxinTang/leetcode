import fib, { 递归 } from './index';

describe('509. 斐波那契数', () => {
  test('动态规划', () => {
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
  });

  test('递归', () => {
    expect(递归(2)).toBe(1);
    expect(递归(3)).toBe(2);
    expect(递归(4)).toBe(3);
    expect(递归(5)).toBe(5);
  });
});
