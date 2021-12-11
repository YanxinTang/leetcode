import func from '.';

test('322. 零钱兑换', () => {
  const cases = [
    {
      input: [[1, 2, 5], 11],
      want: 3,
    },
    {
      input: [[2], 3],
      want: -1,
    },
    {
      input: [[1], 0],
      want: 0,
    },
    {
      input: [[1], 1],
      want: 1,
    },
    {
      input: [[1], 2],
      want: 2,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
