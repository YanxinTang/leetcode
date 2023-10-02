import func from '.';

test.each([
  {
    input: [[1, 1, 1, 2, 2, 3]],
    want: [1, 1, 2, 2, 3],
  },
  {
    input: [[0, 0, 1, 1, 1, 1, 2, 3, 3]],
    want: [0, 0, 1, 1, 2, 3, 3],
  },
])('80. 删除有序数组中的重复项 II($#)', ({ input, want }) => {
  const len = func.apply(null, input);
  const result = input[0].splice(0, len);
  expect(result).toStrictEqual(want);
});
