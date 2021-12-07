import func from '.';

test('63. 不同路径 II', () => {
  const cases = [
    {
      input: [
        [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ],
      ],
      want: 2,
    },
    {
      input: [
        [
          [0, 1],
          [0, 0],
        ],
      ],
      want: 1,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
