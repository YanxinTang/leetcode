import dp from './dp';

describe('32. 最长有效括号', () => {
  const cases = [
    {
      input: ['(()'],
      want: 2,
    },
    {
      input: [')()())'],
      want: 4,
    },

    {
      input: [''],
      want: 0,
    },

    {
      input: ['())'],
      want: 2,
    },
    {
      input: ['()(())'],
      want: 6,
    },
  ];

  test('动态规则', () => {
    for (const tc of cases) {
      expect(dp(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
    }
  });
});
