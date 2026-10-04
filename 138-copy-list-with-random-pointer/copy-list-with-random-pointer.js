/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if(!head) return null;
    let oldToNew = new Map();
    let curr = head;
    while(curr !==null){
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    while(curr !==null){
        let copyNode = oldToNew.get(curr);
        copyNode.next = oldToNew.get(curr.next) || null;
        copyNode.random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }
    return oldToNew.get(head);
};