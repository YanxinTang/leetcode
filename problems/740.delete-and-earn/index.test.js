import func from '.';

test('740. 删除并获得点数', () => {
  const cases = [
    {
      input: [[3, 4, 2]],
      want: 6,
    },
    {
      input: [[2, 2, 3, 3, 3, 4]],
      want: 9,
    },
    {
      input: [[3, 1]],
      want: 4,
    },
    {
      input: [[3, 3, 3, 4, 2]],
      want: 9,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input)).toBe(tc.want);
  }
});
