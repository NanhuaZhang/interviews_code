function debounce(func,wait,immediate){
    let timer;
    let hasExecute = false;
    let result;

    const debounceFunc = function () {
        const context = this;

        if (immediate && !hasExecute){
            result = func.apply(context,arguments)
            hasExecute = true;
            return;
        }

        clearTimeout(timer);

        timer = setTimeout(()=>{
            func.apply(context,arguments)
        },wait)

        return result;
    }

    debounceFunc.cancel = ()=>{
        clearTimeout(timer);
        hasExecute = false;
    }

    return debounceFunc;
}

 function log(...args){
    console.log(`date: ${args}\nthis: ${this.name}`);
    return new Date();
}

const debounceFuc = debounce(log,10,true);

// log(1,2,3);

let j = 0;
for (let i = 0; i < 10000; i++) {
    debounceFuc(1,2,3);

    if(i % 1000 === 0){
        j += 1;
        debounceFuc.cancel();
        console.log('取消次数',j);
    }
}
