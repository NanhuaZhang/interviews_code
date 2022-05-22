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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root){
        return null;
    }

    if(key > root.val){
        root.right = deleteNode(root.right,key);
    }else if(key < root.val){
        root.left = deleteNode(root.left,key);
    }else{
        if(!root.left && !root.right){
            root = null;
        }
        else if(root.right){
            root.val = successor(root);
            root.right = deleteNode(root.right,root.val);
        }
        else{
            root.val = findNext(root);
            root.left = deleteNode(root.left,root.val);
        }
    }

    return root;
};


function successor(root){
    root = root.right;
    while (root.left){
        root = root.left;
    }
    return root.val;
}

function findNext(root){
    root = root.left;
    while (root.right){
        root = root.right;
    }
    return root.val;

}

// [5,3,6,2,4,null,7]
const root = new TreeNode(5)

root.left = new TreeNode(3,new TreeNode(2),new TreeNode(4));

root.right = new TreeNode(6,undefined,new TreeNode(7));

deleteNode(root,3)

console.log(root)
