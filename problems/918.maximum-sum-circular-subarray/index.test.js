import func from '.';

test('918. 环形子数组的最大和', () => {
  const cases = [
    {
      input: [[1, -2, 3, -2]],
      want: 3,
    },
    {
      input: [[5, -3, 5]],
      want: 10,
    },
    {
      input: [[3, -1, 2, -1]],
      want: 4,
    },
    {
      input: [[3, -2, 2, -3]],
      want: 3,
    },
    {
      input: [[-2, -3, -1]],
      want: -1,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
