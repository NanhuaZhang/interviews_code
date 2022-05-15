function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


let maxSum = 0;

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = function(root) {
    dfs(root)
    return maxSum;
};

function dfs(root){
    if(!root){
        return;
    }

    let sum = 0;
    if(root.val >= 0){
        const leftValue = root.left ? root.left.val: 0;
        const rightValue = root.right ? root.right.val: 0;

        sum = root.val + ((leftValue>0)?leftValue:0) + (rightValue>0)?rightValue:0;
        if(sum > maxSum){
            maxSum = sum;
        }
    }

    dfs(root.left);
    dfs(root.right);
}

const tree = new TreeNode(0,null,null);

console.log(maxPathSum(tree));
