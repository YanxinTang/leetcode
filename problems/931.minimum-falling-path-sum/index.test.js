import func from '.';

test('931. 下降路径最小和', () => {
  const cases = [
    {
      input: [
        [
          [2, 1, 3],
          [6, 5, 4],
          [7, 8, 9],
        ],
      ],
      want: 13,
    },
    {
      input: [
        [
          [-19, 57],
          [-40, -5],
        ],
      ],
      want: -59,
    },
    {
      input: [[[-48]]],
      want: -48,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
