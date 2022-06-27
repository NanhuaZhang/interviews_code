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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const list = [];
    dfs(root,0,targetSum,list);
    return list.length > 0;
};

function dfs(root,cur,targetSum,list){
    if(!root){
        return false;
    }

    cur = cur + root.val;

    if(!root.left && !root.right){
        if(cur === targetSum){
            list.push(0);
        }
        return;
    }

    // if(list.length>0){
    //     return;
    // }
    dfs(root.left,cur,targetSum,list);
    if(list.length>0){
        return;
    }
    dfs(root.right,cur,targetSum,list)
    // if(list.length>0){
    //     return;
    // }
}
