import func from '.';

test('5. 最长回文子串', () => {
  const cases = [
    {
      input: ['babad'],
      want: 'bab',
    },
    {
      input: ['cbbd'],
      want: 'bb',
    },
    {
      input: ['a'],
      want: 'a',
    },
    {
      input: ['ac'],
      want: 'a',
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
