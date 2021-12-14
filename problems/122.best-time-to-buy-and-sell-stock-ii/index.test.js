import func from '.';

test('122. 买卖股票的最佳时机 II', () => {
  const cases = [
    {
      input: [[7, 1, 5, 3, 6, 4]],
      want: 7,
    },
    {
      input: [[1, 2, 3, 4, 5]],
      want: 4,
    },
    {
      input: [[7, 6, 4, 3, 1]],
      want: 0,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
