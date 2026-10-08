/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
if(!lists || lists.length ===0) return null;
var mergedTwoLists = function(list1,list2){
    let dummy = new ListNode(0);
    let tail = dummy;
    while(list1 !==null && list2 !==null){
        if(list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next
        }
        else{
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if(list1 !==null){
        tail.next = list1;
    }
    else if(list2 !==null){
        tail.next = list2;
    }
    return dummy.next;
}
while(lists.length >1){
    let mergedLists = [];
    for(let i =0; i<lists.length; i+=2){
        let list1 = lists[i];
        let list2 = (i+1 < lists.length)?lists[i+1]:null;
        let winnerLists = mergedTwoLists(list1,list2);
        mergedLists.push(winnerLists)
    }
    lists = mergedLists;
}
return lists[0]
  
};

