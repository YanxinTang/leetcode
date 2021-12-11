import { List } from '.';

describe('测试列表工具类', () => {
  test('从字符描述中构建一个字符链表', () => {
    let p = List.fromString('1->2->3->4->5');
    const wants = ['1', '2', '3', '4', '5'];
    let i = 0;
    while (p) {
      expect(p.val).toBe(wants[i]);
      p = p.next;
      i++;
    }
  });

  test('从字符描述中构建一个整形链表', () => {
    let p = List.fromString('1->2->3->4->5', 'number');
    const wants = [1, 2, 3, 4, 5];
    let i = 0;
    while (p) {
      expect(p.val).toBe(wants[i]);
      p = p.next;
      i++;
    }
  });

  test('将链表格式化为字符串', () => {
    let p = List.fromString('1->2->3->4->5');
    const want = '1->2->3->4->5';
    expect(List.format(p)).toBe(want);
  });
});
