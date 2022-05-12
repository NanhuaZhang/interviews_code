var lowestCommonAncestor = function(root, p, q) {
    const map = new Map();
    map.set(root.val,null);

    dfs(root,map);

    const pVisited = new Map();

    while(p!=null){
        pVisited.set(p.val,true);
        p = map.get(p.val);
    }

    while(q!=null){
        if(pVisited.get(q.val)) return q;
        q = map.get(q.val);
    }

    return null;
};


var dfs = function(root,map){
    if(root.left!=null){
        map.set(root.left.val,root);
        dfs(root.left,map);
    }


    if(root.right!=null){
        map.set(root.right.val,root);
        dfs(root.right,map);
    }

}
