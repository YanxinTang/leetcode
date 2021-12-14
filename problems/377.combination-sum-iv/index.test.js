import func from '.';

test('377. 组合总和 Ⅳ', () => {
  const cases = [
    {
      input: [[1, 2, 3], 4],
      want: 7,
    },
    {
      input: [[9], 3],
      want: 0,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
