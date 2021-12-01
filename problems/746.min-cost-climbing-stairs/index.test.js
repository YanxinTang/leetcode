import minCostClimbingStairs from '.';

test('746. 使用最小花费爬楼梯', () => {
  const cases = [
    {
      input: [[10, 15, 20]],
      want: 15,
    },
    {
      input: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]],
      want: 6,
    },
  ];

  for (const tc of cases) {
    expect(minCostClimbingStairs.apply(this, tc.input)).toBe(tc.want);
  }
});
