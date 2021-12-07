import func from '.';

test('1314. 矩阵区域和', () => {
  const cases = [
    {
      input: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1,
      ],
      want: [
        [12, 21, 16],
        [27, 45, 33],
        [24, 39, 28],
      ],
    },
    {
      input: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        2,
      ],
      want: [
        [45, 45, 45],
        [45, 45, 45],
        [45, 45, 45],
      ],
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toEqual(tc.want);
  }
});
