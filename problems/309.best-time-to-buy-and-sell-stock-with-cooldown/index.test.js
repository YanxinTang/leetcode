import func from '.';

test('309. 最佳买卖股票时机含冷冻期', () => {
  const cases = [
    {
      input: [[1, 2, 3, 0, 2]],
      want: 3,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
