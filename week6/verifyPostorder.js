/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    return check(postorder,0,postorder.length-1);
};

function check(list,start,end){
    if(start >= end){
        return true;
    }
    let p = start;

    while(list[p] < list[end]) p++;

    let mid = p;

    while(list[p] > list[end]) p++;

    return p === end && check(list,start,mid-1) && check(list,mid,end-1)
}
