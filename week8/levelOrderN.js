/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const nodeList = [];
    if(!root){
        return nodeList
    }

    let queue = [root];

    while(queue.length > 0){
        const currentLevelList = queue.map(node=>node.val);
        nodeList.push(currentLevelList);

        const nextQueue = queue.reduce((pre,cur)=>{
            return pre.concat(cur.children)
        },[]);

        queue = nextQueue;
    }

    return nodeList;
};
