import func from '.';

test('121. 买卖股票的最佳时机', () => {
  const cases = [
    {
      input: [[7, 1, 5, 3, 6, 4]],
      want: 5,
    },
    {
      input: [[7, 6, 4, 3, 1]],
      want: 0,
    },
    {
      input: [[3, 2, 6, 5, 0, 3]],
      want: 4,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
