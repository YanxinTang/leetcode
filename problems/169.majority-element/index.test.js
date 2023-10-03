import func from '.';

test.each([
  {
    input: [[3, 2, 3]],
    want: 3,
  },
  {
    input: [[2, 2, 1, 1, 1, 2, 2]],
    want: 2,
  },
])('169. 多数元素($#)', ({ input, want }) => {
  expect(func.apply(null, input)).toBe(want);
});
