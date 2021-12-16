import dp from './dp';
import stack from './stack';

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
    {
      input: ['()(()'],
      want: 2,
    },
  ];

  test('动态规则', () => {
    for (const tc of cases) {
      expect(dp(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
    }
  });

  test('栈', () => {
    for (const tc of cases) {
      expect(stack(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
    }
  });
});
