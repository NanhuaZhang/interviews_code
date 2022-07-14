/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    return dfs(root) + 1;
};

function dfs(root){
    if(!root){
        return 0;
    }

    const children = root.children;
    let ans = 0;

    children.forEach(child=>{
        ans = Math.max(dfs(child)+1,ans);
    })

    return ans;
}
