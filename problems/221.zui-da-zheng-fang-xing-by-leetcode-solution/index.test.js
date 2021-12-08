import func from '.';

test('221. 最大正方形', () => {
  const cases = [
    {
      input: [
        [
          ['1', '0', '1', '0', '0'],
          ['1', '0', '1', '1', '1'],
          ['1', '1', '1', '1', '1'],
          ['1', '0', '0', '1', '0'],
        ],
      ],
      want: 4,
    },
    {
      input: [
        [
          ['0', '1'],
          ['1', '0'],
        ],
      ],
      want: 1,
    },
    {
      input: [[['0']]],
      want: 0,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
