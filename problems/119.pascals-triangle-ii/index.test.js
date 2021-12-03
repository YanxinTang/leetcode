import func from '.';

test('119. 杨辉三角 II', () => {
  const cases = [
    {
      input: [3],
      want: [1, 3, 3, 1],
    },
    {
      input: [0],
      want: [1],
    },
    {
      input: [1],
      want: [1, 1],
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toEqual(tc.want);
  }
});
