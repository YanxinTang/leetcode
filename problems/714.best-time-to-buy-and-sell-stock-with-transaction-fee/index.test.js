import func from '.';

test('714. 买卖股票的最佳时机含手续费', () => {
  const cases = [
    {
      input: [[1, 3, 2, 8, 4, 9], 2],
      want: 8,
    },
    {
      input: [[1, 3, 7, 5, 10, 3], 3],
      want: 6,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
