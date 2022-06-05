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
