import func from '.';

test('376. 摆动序列', () => {
  const cases = [
    {
      input: [[1, 7, 4, 9, 2, 5]],
      want: 6,
    },
    {
      input: [[1, 17, 5, 10, 13, 15, 10, 5, 16, 8]],
      want: 7,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
