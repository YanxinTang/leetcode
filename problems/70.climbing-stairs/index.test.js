import climbStairs from '.';

test('70. 爬楼梯', () => {
  const cases = [
    {
      input: [2],
      want: 2
    },
    {
      input: [3],
      want: 3
    }
  ]
  for (const tc of cases) {
    expect(climbStairs.apply(this, tc.input)).toBe(tc.want);
  }
});
