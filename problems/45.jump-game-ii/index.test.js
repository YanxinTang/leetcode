import func from '.';

test('45. 跳跃游戏 II', () => {
  const cases = [
    {
      input: [[2, 3, 1, 1, 4]],
      want: 2,
    },
    {
      input: [[2, 3, 0, 1, 4]],
      want: 2,
    },
    {
      input: [[0]],
      want: 0,
    },
    {
      input: [[2, 1]],
      want: 1,
    },
    {
      input: [[1, 2]],
      want: 1,
    },
    {
      input: [[1, 2, 1, 1, 1]],
      want: 3,
    },
    {
      input: [[2, 3, 1]],
      want: 1,
    },
  ];
  for (const tc of cases) {
    expect(func.apply(this, tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
