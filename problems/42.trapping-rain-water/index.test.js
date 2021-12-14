import func from '.';

test('42. 接雨水', () => {
  const cases = [
    {
      input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
      want: 6,
    },
    {
      input: [[4, 2, 0, 3, 2, 5]],
      want: 9,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
