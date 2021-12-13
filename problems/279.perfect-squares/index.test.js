import func from '.';

test('279. 完全平方数', () => {
  const cases = [
    {
      input: [12],
      want: 3,
    },
    {
      input: [13],
      want: 2,
    },
    {
      input: [4],
      want: 1,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
