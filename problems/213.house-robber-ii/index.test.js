import func from '.';

test('house-robber-ii', () => {
  const cases = [
    {
      input: [
        [2,3,2]
      ],
      want: 3
    },
    {
      input: [
        [1,2,3,1]
      ],
      want: 4
    },
    {
      input: [
        [1,1,1,2]
      ],
      want: 3
    }
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input)).toBe(tc.want);
  }
});
