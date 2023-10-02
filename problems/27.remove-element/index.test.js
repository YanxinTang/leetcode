import func from '.';

test.each([
  {
    input: [[3, 2, 2, 3], 3],
    want: [2, 2],
  },
  {
    input: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
    want: [0, 1, 3, 0, 4],
  },
])('27. 移除元素($#)', ({ input, want }) => {
  const len = func.apply(null, input);
  const result = input[0].splice(0, len);
  expect(result).toStrictEqual(want);
});
