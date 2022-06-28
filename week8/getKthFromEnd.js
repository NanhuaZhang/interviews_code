/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p = q = head;
    let distance = 0;
    while(q.next){
        q = q.next;
        distance +=1;
        if(distance >= k){
            p = p.next;
        }
    }

    return p;
};
