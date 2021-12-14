import func from '.';

test('300. 最长递增子序列', () => {
  const cases = [
    {
      input: [[10, 9, 2, 5, 3, 7, 101, 18]],
      want: 4,
    },
    {
      input: [[0, 1, 0, 3, 2, 3]],
      want: 4,
    },
    {
      input: [[7, 7, 7, 7, 7, 7, 7]],
      want: 1,
    },
    {
      input: [[3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]],
      want: 6,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
