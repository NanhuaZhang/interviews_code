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

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);

console.log(sumWithInitial);
