import func from '.';

test('1567. 乘积为正数的最长子数组长度', () => {
  const cases = [
    {
      input: [[1, -2, -3, 4]],
      want: 4,
    },
    {
      input: [[0, 1, -2, -3, -4]],
      want: 3,
    },
    {
      input: [[-1, -2, -3, 0, 1]],
      want: 2,
    },
    {
      input: [[-1, 2]],
      want: 1,
    },
    {
      input: [[1, 2, 3, 5, -6, 4, 0, 10]],
      want: 4,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
