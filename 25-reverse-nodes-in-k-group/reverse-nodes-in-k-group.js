/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || k===1) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let groupBefore = dummy;
    while(true){
        let groupLast = getKth(groupBefore, k);
        if(!groupLast) break;
        let groupAfter = groupLast.next;
        let current = groupBefore.next;
        let prev = groupAfter;
        while(current !== groupAfter){
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        let groupFirst = groupBefore.next;
        groupBefore.next = groupLast;
        groupBefore = groupFirst;

    }
    return dummy.next;
    function getKth(current,k){
        while(current && k > 0){
            current = current.next;
            k--
        }
        return current;
    }
    
};