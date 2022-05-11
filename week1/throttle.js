/**
 *
 * @param func
 * @param wait
 * @param options leading：false  trailing:false
 */
function throttle(func, wait, options){
    let previous = 0;
    let result;
    let timer;
    if (!options) options = {};


    const throttleFunc = function (){
        const context = this;
        const current = +new Date();

        if(options.leading === true && previous === 0){
            console.log('leading',options)
            result = func.apply(context, arguments);
            previous = current;
            return result;
        }

        if(options.trailing === true){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                console.log('throttleFunc.getRemainTime(current)',throttleFunc.getRemainTime(current))
                func.apply(context, arguments);
            }, throttleFunc.getRemainTime(current))
        }

        if(current - previous > wait){
            result = func.apply(context, arguments);
            previous = current;
            return result;
        }
    }

    throttleFunc.getRemainTime = (current)=>{
        if(!previous){
            return wait;
        }

        return wait - (current - previous )
    }

    throttleFunc.cancel = ()=>{
        previous = undefined;
    }

    return throttleFunc;
}

// import loadsh from "loadsh/function.js";
//
// const { throttle } = loadsh;

function log(...args){

    console.log(`date: ${args}\nthis: ${this}`);
    return new Date();
}


const throttleFuc = throttle(log,2,{leading:false});

// log(1,2,3);

let j = 0;
for (let i = 0; i < 30000; i++) {
    throttleFuc(1,2,3);
}
