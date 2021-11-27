import func from '.';

test('53. 最大子序和', () => {
  const cases = [
    {
      input: [
        [-2,1,-3,4,-1,2,1,-5,4]
      ],
      want: 6
    },
    {
      input: [
        [1]
      ],
      want: 1
    },
    {
      input: [
        [0]
      ],
      want: 0
    },
    {
      input: [
        [-1]
      ],
      want: -1
    },
    {
      input: [
        [-100000]
      ],
      want: -100000
    },
    {
      input: [
        [-2, -1]
      ],
      want: -1
    },
    {
      input: [
        [1, 2]
      ],
      want: 3
    }
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
