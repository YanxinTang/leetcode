import func from '.';

test('516. 最长回文子序列', () => {
  const cases = [
    {
      input: ['bbbab'],
      want: 4,
    },
    {
      input: ['cbbd'],
      want: 2,
    },
    {
      input: ['aaa'],
      want: 3,
    },
    {
      input: ['abaabaa'],
      want: 6,
    },
    {
      input: ['aabaaba'],
      want: 6,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
