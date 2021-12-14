import func from '.';

test('120. 三角形最小路径和', () => {
  const cases = [
    {
      input: [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]],
      want: 11,
    },
    {
      input: [[[-10]]],
      want: -10,
    },
    {
      input: [[[-1], [-2, -3]]],
      want: -4,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
