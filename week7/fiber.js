//0、1、1、2、3、5、8、13、21、34 求第n位




function fiber(n){
    if(n===1){
        return 0;
    }

    if(n===2){
        return 1;
    }
    return fiber(n-2) + fiber(n-1)
}

function fiberN(n){
    if(n===1){
        return 0;
    }

    if(n===2){
        return 1;
    }
    let num1 = 0;
    let num2 = 1;

    let result = num1 + num2;

    let i = 3
    while (i<n){
        let temp = result;
        num1 = num2;
        result = result + num2;
        num2 = temp;
        i++;
    }

    return result;
}

console.log(fiberN(5))
