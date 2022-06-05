/**
 *
 * @param arr {Array}
 * @param depth
 * @returns {*}
 */
function flat(arr, depth = 1) {
    if(depth>=0){
        return arr.reduce((preArr,current)=>{
            return preArr.concat(Array.isArray(current) ? flat(current,depth-1):current);
        },[])
    }
    return arr.slice();
}

Array.prototype.reduce = function (callBack,initialValue){
    if(typeof callBack !== 'function'){
        throw Error('function');
    }

    const context = this;// arr
    let total = initialValue ?? context[0];

    context.forEach((element,index)=>{
        total = callBack.call(context,total,element,index,context)
    })

    return total;
}


const arr = [1, 2, [3, 4, [5, 6]]];

console.log(flat(arr))
