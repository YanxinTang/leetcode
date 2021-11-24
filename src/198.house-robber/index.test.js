import func from '.';

test('198. 打家劫舍', () => {
  const cases = [
    {
      input: [
        [0]
      ],
      want: 0
    },
    {
      input: [
        [1,2,3,1]
      ],
      want: 4
    },
    {
      input: [
        [2,7,9,3,1]
      ],
      want: 12
    }
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input)).toBe(tc.want);
  }
});
