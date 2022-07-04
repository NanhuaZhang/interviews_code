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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const orderList = [];

    dfs(root,orderList);

    return orderList[k-1]
};

function dfs(root,orderList){
    if(!root){
        return;
    }

    dfs(root.left,orderList);
    orderList.push(root.val);
    dfs(root.right,orderList);

}
