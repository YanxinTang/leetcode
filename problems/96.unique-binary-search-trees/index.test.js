import func from '.';

test('96. 不同的二叉搜索树', () => {
  const cases = [
    {
      input: [3],
      want: 5,
    },
    {
      input: [1],
      want: 1,
    },
    {
      input: [4],
      want: 14,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
