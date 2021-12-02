import func from '.';

test('413. 等差数列划分', () => {
  const cases = [
    {
      input: [[1, 2, 3, 4]],
      want: 3,
    },
    {
      input: [[1]],
      want: 0,
    },
    {
      input: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
      want: 120,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
