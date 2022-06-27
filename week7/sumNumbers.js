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
var sumNumbers = function(root) {

    return dfs(root,0);
};

function dfs(root,temp){

    if(!root){
        return 0;
    }
    temp = temp*10 + root.val;

    if(!root.left && !root.right){
        return temp;
    }
    return dfs(root.left,temp) +  dfs(root.right,temp);
}
