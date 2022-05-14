/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    if(!head || !head.next){
        return head;
    }

    let node = head;
    const queue = [node];

    while(node.next!==null){
        node = node.next;
        queue.unshift(node);
    }

    for(let i=0;i<queue.length;i++){
        const node = queue[i];

        if(i+1===queue.length){
            node.next = null;
        }else{
            node.next = queue[i+1];
        }
    }

    return queue[0];
};
