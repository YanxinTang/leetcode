import func from '.';

test('152. 乘积最大子数组', () => {
  const cases = [
    {
      input: [[2, 3, -2, 4]],
      want: 6,
    },
    {
      input: [[-2, 0, -1]],
      want: 0,
    },
    {
      input: [[-2]],
      want: -2,
    },
    {
      input: [[2, -5, -2, -4, 3]],
      want: 24,
    },
    {
      input: [[0, 2]],
      want: 2,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
