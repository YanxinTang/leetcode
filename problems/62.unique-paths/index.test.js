import func from '.';

test('62. 不同路径', () => {
  const cases = [
    {
      input: [3, 7],
      want: 28,
    },
    {
      input: [3, 2],
      want: 3,
    },
    {
      input: [7, 3],
      want: 28,
    },
    {
      input: [3, 3],
      want: 6,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
