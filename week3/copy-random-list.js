/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, map = new Map()) {
    if(head === null){
        return null;
    }

    if(!map.has(head)){
        map.set(head,{val:head.val})

        Object.assign( map.get(head),{next: copyRandomList(head.next,map),random:copyRandomList(head.random,map)})
    }

    return map.get(head);
};
