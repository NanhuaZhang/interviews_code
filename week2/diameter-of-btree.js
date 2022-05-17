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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const maxAns = [1];

    dfs(root,maxAns);

    return maxAns[0] -1;
};

function dfs(root,maxAns){
    if(!root){
        return 0;
    }

    const leftNode = dfs(root.left,maxAns);
    const rightNode = dfs(root.right,maxAns);

    maxAns[0] = Math.max(leftNode + rightNode + 1, maxAns[0]);

    return Math.max(leftNode,rightNode) + 1;
}
