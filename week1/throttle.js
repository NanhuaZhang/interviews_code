/**
 *
 * @param func
 * @param wait
 * @param options leading：false  trailing:false
 */
// function throttle(func,wait,options){
//     let timer;
//
//     const throttleFunc = function (){
//         const context = this;
//
//         if(!timer) {
//             console.log('execute');
//             timer = setTimeout(() => {
//                 console.log('execute===');
//                 timer = null;
//                 func.apply(context, arguments);
//             }, wait)
//         }
//     }
//
//     throttleFunc.cancel = ()=>{
//         clearTimeout(timer);
//         timer = null
//     }
//
//     return throttleFunc;
// }

// 第二版
function throttle(func, wait) {
    var timeout;
    var previous = 0;

    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}

function log(...args){
    console.log(`date: ${args}\nthis: ${this.name}`);
    return new Date();
}

const throttleFuc = throttle(log,1);

// log(1,2,3);

let j = 0;
for (let i = 0; i < 1; i++) {
    throttleFuc(1,2,3);
    // const nowTime = + new Date();
    // while (nowTime + 5 > +new Date()){
    // }

    // if(i % 1000 === 0){
    //     j += 1;
    //     throttleFuc.cancel();
    //     console.log('取消次数',j);
    // }
}
