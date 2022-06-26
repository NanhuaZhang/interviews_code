/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
    const result = [];

    let queue = [root];

    while(queue.length > 0){
        const nextQueue = [];
        const curLevel = []

        queue.forEach(node=>{
            if(node.left){
                nextQueue.push(node.left);
            }

            if(node.right){
                nextQueue.push(node.right);
            }

            curLevel.push(node.val);
        })
        result.push(curLevel)
        queue = nextQueue;
    }

    return result;
};
