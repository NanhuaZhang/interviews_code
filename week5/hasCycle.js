var hasCycle = function(head) {
    let p = head;
    let q = head;

    while(q && q.next){
        p = p.next;
        q = q.next.next;

        if(p === q){
            return true;
        }
    }

    return false;
};
