import func from '.';

test('91. 解码方法', () => {
  const cases = [
    {
      input: ['12'],
      want: 2,
    },
    {
      input: ['226'],
      want: 3,
    },
    {
      input: ['0'],
      want: 0,
    },
    {
      input: ['06'],
      want: 0,
    },
    {
      input: ['27'],
      want: 1,
    },
    {
      input: ['2101'],
      want: 1,
    },
    {
      input: ['1201234'],
      want: 3,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
