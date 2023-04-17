const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  let c = l;
  let p = null;

  while(c) {

    if (c.value === k) {
      if (!c.next) {
        p.next = null;
        return l;
      }

      if (!p) {
        l = c.next;
      } else {

        let t = c.next;

        while(t.value === k) {
          t = t.next;
        }

        p.next = t;
        c = t.next;
        continue;
      }
    }

    p = c;
    c = c.next;
  }

  return l;

}

module.exports = {
  removeKFromList
};
