import { List } from '../../utils/list';
import func from '.';

test('面试题 02.02. 返回倒数第 k 个节点', () => {
  const cases = [
    {
      input: [List.fromString('1->2->3->4->5', 'number'), 2],
      want: 4,
    },
  ];
  for (const tc of cases) {
    expect(func(...tc.input), JSON.stringify(tc.input)).toBe(tc.want);
  }
});
