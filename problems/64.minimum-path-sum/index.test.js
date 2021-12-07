import func from '.';

test('64. 最小路径和', () => {
  const cases = [
    {
      input: [
        [
          [1, 3, 1],
          [1, 5, 1],
          [4, 2, 1],
        ],
      ],
      want: 7,
    },
    {
      input: [
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
      ],
      want: 12,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
