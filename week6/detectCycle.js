var detectCycle = function(head) {
    let q = head;
    const nodeMap = new Map();

    while(q){
        if(nodeMap.has(q)){
            return q;
        }
        nodeMap.set(q,0);
        q = q.next;
    }

    return null;
};
