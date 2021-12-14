import func from '.';

test('118. 杨辉三角', () => {
  const cases = [
    {
      input: [5],
      want: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
    },
    {
      input: [1],
      want: [[1]],
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toEqual(tc.want);
  }
});
