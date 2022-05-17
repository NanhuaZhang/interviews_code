/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const treeNodeList = [];

    dfs(root,treeNodeList);

    return JSON.stringify(treeNodeList);
};

function dfs(root,treeNodeList){
    if(!root){
        treeNodeList.push(null);
        return;
    }

    treeNodeList.push(root.val);
    dfs(root.left,treeNodeList);
    dfs(root.right,treeNodeList);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const treeNodeList = JSON.parse(data);

    return createTree(treeNodeList);
};


function createTree(treeNodeList){
    if(treeNodeList[0] === null){
        treeNodeList.shift();
        return null;
    }

    const root = new TreeNode(treeNodeList[0]);
    treeNodeList.shift();

    root.left = createTree(treeNodeList);
    root.right = createTree(treeNodeList);

    return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



deserialize(serialize(root));
