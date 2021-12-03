import func from '.';

test('264. 丑数 II', () => {
  const cases = [
    {
      input: [10],
      want: 12,
    },
    {
      input: [1],
      want: 1,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
