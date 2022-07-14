import func from '.';

test('57. 插入区间', () => {
  const cases = [
    {
      // prettier-ignore
      input: [[[1,3],[6,9]], [2,5]],
      // prettier-ignore
      want: [[1,5],[6,9]],
    },
    {
      // prettier-ignore
      input: [[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]],
      // prettier-ignore
      want: [[1,2],[3,10],[12,16]],
    },
    {
      // prettier-ignore
      input: [[], [5,7]],
      // prettier-ignore
      want: [[5,7]],
    },
    {
      // prettier-ignore
      input: [[[1,5]], [2,3]],
      // prettier-ignore
      want: [[1,5]],
    },
    {
      // prettier-ignore
      input: [[[1,5]], [2,7]],
      // prettier-ignore
      want: [[1,7]],
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toEqual(tc.want);
  }
});
