import func from '.';

test('518. 零钱兑换 II', () => {
  const cases = [
    {
      input: [5, [1, 2, 5]],
      want: 4,
    },
    {
      input: [3, [2]],
      want: 0,
    },
    {
      input: [10, [10]],
      want: 1,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
