import func from '.';

test.each([
  {
    input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    want: [1, 2, 2, 3, 5, 6],
  },
  {
    input: [[1], 1, [], 0],
    want: [1],
  },
  {
    input: [[0], 0, [1], 1],
    want: [1],
  },
])('88. 合并两个有序数组($#)', ({ input, want }) => {
  func.apply(null, input);
  expect(input[0]).toStrictEqual(want);
});
