import func from '.';

test.each([
  {
    input: [[1, 1, 2]],
    want: [1, 2],
  },
  {
    input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
    want: [0, 1, 2, 3, 4],
  },
])('26. 删除有序数组中的重复项($#)', ({ input, want }) => {
  const len = func.apply(null, input);
  const result = input[0].splice(0, len);
  expect(result).toStrictEqual(want);
});
