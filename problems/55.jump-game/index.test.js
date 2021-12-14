import func from '.';

test('55. 跳跃游戏', () => {
  const cases = [
    {
      input: [[2, 3, 1, 1, 4]],
      want: true,
    },
    {
      input: [[3, 2, 1, 0, 4]],
      want: false,
    },
    {
      input: [[0]],
      want: true,
    },
    {
      input: [[2, 0, 0]],
      want: true,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
