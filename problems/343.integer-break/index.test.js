import func from '.';

test('343. 整数拆分', () => {
  const cases = [
    {
      input: [2],
      want: 1,
    },
    {
      input: [10],
      want: 36,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
