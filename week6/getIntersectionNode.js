/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let l = headA;
    let r = headB;

    while(l!==r){
        l = l ? l.next:headB;
        r = r ? r.next:headA;
    }
    return l;
};
