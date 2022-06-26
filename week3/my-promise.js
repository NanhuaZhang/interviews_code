// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    status = PENDING;

    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;

    resolveCallback = [];

    rejectCallback = [];

    static resolve(param){
        if(param instanceof MyPromise){
            return param;
        }
        return new MyPromise((resolve) => resolve(param));
    }

    static reject(param){
        if(param instanceof MyPromise){
            return param;
        }
        return new MyPromise((_resolve,reject) => reject(param));
    }

    constructor(excutor) {
        try {
            excutor(this.resolve,this.reject);
        }
        catch (error){
            this.reject(error);
        }
    }

    resolve = (value)=>{
        if(this.status === PENDING){
            this.status = FULFILLED;
            this.value = value;
            while (this.resolveCallback.length>0){
                this.resolveCallback.shift()();
            }
        }
    }

    reject = (reason)=>{
        if(this.status === PENDING){
            this.status = REJECTED;
            this.reason = reason;
            while (this.rejectCallback.length>0){
                this.rejectCallback.shift()();
            }
        }
    }

    then(onFulfilled, onRejected){
        const onFulfill = typeof onFulfilled === 'function' ? onFulfilled: (value)=>value;
        const onReject = typeof onRejected === 'function' ? onRejected: (reason)=>{throw reason}

        const myPromise2 = new MyPromise((resolve,reject)=>{
            if(this.status === FULFILLED){
                queueMicrotask(()=>{
                    try{
                        const x =  onFulfill(this.value);
                        resolvePromise(x,myPromise2,resolve,reject);
                    }catch (error){
                        reject(error);
                    }
                })
            }else if(this.status === REJECTED){
                try {
                    const x = onReject(this.reason);
                    resolvePromise(x,myPromise2,resolve,reject)
                }catch (error){
                    reject(error)
                }

            }else {
                this.resolveCallback.push(()=>{
                    queueMicrotask(()=>{
                        try {
                            const x = onFulfill(this.value);
                            resolvePromise(x,myPromise2,resolve,reject);
                        }catch (error){
                            reject(error);
                        }
                    })
                });
                this.rejectCallback.push(()=>{
                    queueMicrotask(()=>{
                        try {
                            const x = onReject(this.reason);
                            resolvePromise(x,myPromise2,resolve,reject);
                        }catch (error){
                            reject(error);
                        }
                    })
                });
            }
        })

        return myPromise2;
    }
}

function resolvePromise(x,myPromise2,resolve,reject){
    if(x === myPromise2){
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    if(typeof x === 'function' || typeof x ==='object'){
        const then = x.then;

        if(typeof then === 'function'){
            let called = false;
            try {
                then.call(
                    x,
                    y=>{
                        if(called) return;
                        called = true;
                        resolvePromise(y,myPromise2,resolve,reject);
                    },
                    z=>{
                        if (called) return;
                        called = true;
                        reject(z);
                    })
            }catch (error){
                if (called) return;

                reject(error)
            }
        }
        else {
            resolve(x);
        }
    }
    else {
        resolve(x)
    }
}


const reject = async ()=>{
    return new MyPromise((resolve,reject)=>{reject(1);console.log(222)})
}

try {
    console.log(await reject())
}catch (e){
    console.log(e)
}


// MyPromise.resolve().then(() => {
//     console.log(0);
//     return MyPromise.resolve(4);
// }).then((res) => {
//     console.log(res)
// })
//
// MyPromise.resolve().then(() => {
//     console.log(1);
// }).then(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(5);
// }).then(() =>{
//     console.log(6);
// })


// const arr = [1, 2, 3];
//
// arr.reduce((pre, cur) => {
//     return pre.then(() => {
//         return new MyPromise((resolve) => setTimeout(() => resolve(console.log(cur)), 1000))
//     })
// }, MyPromise.resolve())

