import ListNode from './ListNode';

export default class List {
  /**
   * 格式化链表为字符串
   * @param {ListNode} listNode
   * @returns {string}
   */
  static format(listNode) {
    let str = '';
    let p = listNode;
    while (p) {
      str += p.next ? `${p.val}->` : p.val;
      p = p.next;
    }
    return str;
  }

  /**
   * 从描述字符中构建一个链表
   * @param {string} listDesc
   * @param {'string'|'number'} type
   */
  static fromString(listDesc, type = 'string') {
    const values = listDesc.split('->').map((value) => {
      if (type === 'number') {
        return Number(value);
      }
      return value;
    });
    const head = new ListNode();
    let p = head;
    for (const value of values) {
      const node = new ListNode(value);
      p.next = node;
      p = p.next;
    }
    return head.next;
  }
}
