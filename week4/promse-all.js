Promise.all = function (promises){
    return new Promise((resolve, reject) => {
        if(Object.prototype.toString.call(promises) !== '[object Array]'){
            reject('error')
        }

        if(promises.length === 0){
            resolve([])
            return;
        }

        const resList = [];
        let count =0;
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((res)=>{
                count++;
                resList[index] = res;
                if(count === promises.length){
                    resolve(resList);
                }
            }).catch((error)=>{
                reject(error);
            })
        })

    })
}

function runAsync (x) {
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
    return p
}
function runReject (x) {
    const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
    return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
    .then(res => console.log(res))
    .catch(err => console.log(err))
