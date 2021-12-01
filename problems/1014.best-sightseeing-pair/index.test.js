import func from '.';

test('1014. 最佳观光组合', () => {
  const cases = [
    {
      input: [[8, 1, 5, 2, 6]],
      want: 11,
    },
    {
      input: [[1, 2]],
      want: 2,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
