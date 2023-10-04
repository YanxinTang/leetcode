import func from '.';

test.each([
  {
    input: [[1, 2, 3, 4, 5, 6, 7], 3],
    want: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    input: [[-1, -100, 3, 99], 2],
    want: [3, 99, -1, -100],
  },
  {
    input: [[1, 2], 3],
    want: [2, 1],
  },
])('189. 轮转数组($#)', ({ input, want }) => {
  func.apply(null, input);
  expect(input[0]).toStrictEqual(want);
});
