import func from '.';

test('56. 合并区间', () => {
  const cases = [
    {
      input: [
        // prettier-ignore
        [[1,3],[2,6],[8,10],[15,18]],
      ],
      // prettier-ignore
      want: [[1,6],[8,10],[15,18]],
    },
    {
      input: [
        // prettier-ignore
        [[1,4],[4,5]],
      ],
      want: [[1, 5]],
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toEqual(tc.want);
  }
});
