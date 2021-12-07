import NumMatrix from '.';

test('304. 二维区域和检索 - 矩阵不可变', () => {
  const cases = [
    {
      matrix: [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
      ],
      regions: [
        [2, 1, 4, 3],
        [1, 1, 2, 2],
        [1, 2, 2, 4],
      ],
      want: [8, 11, 12],
    },
  ];
  for (const tc of cases) {
    const matrix = new NumMatrix(tc.matrix);
    const get = tc.regions.map((region) => matrix.sumRegion.apply(matrix, region));
    expect(get, JSON.stringify(tc.matrix)).toEqual(tc.want);
  }
});
