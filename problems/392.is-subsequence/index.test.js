import func from '.';

test('392. 判断子序列', () => {
  const cases = [
    {
      input: ['abc', 'ahbgdc'],
      want: true,
    },
    {
      input: ['axc', 'ahbgdc'],
      want: false,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
