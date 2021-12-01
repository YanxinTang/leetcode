import func from '.';

test('139. 单词拆分', () => {
  const cases = [
    {
      input: ['leetcode', ['leet', 'code']],
      want: true,
    },
    {
      input: ['applepenapple', ['apple', 'pen']],
      want: true,
    },
    {
      input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
      want: false,
    },
    {
      input: ['a', ['a']],
      want: true,
    },
    {
      input: ['a', ['b']],
      want: false,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
