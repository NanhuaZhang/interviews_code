/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root,-Infinity, Infinity);
};

function dfs(root,lower,higher){
    if(!root){
        return true;
    }

    if(root.val<=lower || root.val>=higher){
        return false;
    }

    return dfs(root.left,lower,root.val) && dfs(root.right,root.val,higher);
}

const root = new TreeNode(5);

root.left = new TreeNode(1);
root.right = new TreeNode(4 ,new TreeNode(3),new TreeNode(6))

console.log(isValidBST(root))
