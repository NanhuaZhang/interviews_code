Promise.race = function (promises){
    return new Promise((resolve, reject)=>{
        if(typeof promises[Symbol.iterator] !== 'function'){
            reject('error');
        }

        if(promises.length === 0){
            resolve();
        }

        let flag = 0;
        promises.forEach(promise=>{
            Promise.resolve(promise).then((res=>{
                if(flag === 0){
                    flag =1;
                    resolve(res);
                }
            })).catch(err=>{
                reject(err)
            })

        })
    })
}

function runAsync(x) {
    const p = new Promise(r =>
        setTimeout(() => r(x, console.log(x)), 1000)
    );
    return p;
}
function runReject(x) {
    const p = new Promise((res, rej) =>
        setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
    );
    return p;
}
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
    .then(res => console.log("result: ", res))
    .catch(err => console.log(err));


