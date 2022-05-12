function unique(arrs){
    return [...new Set(arrs)]
}


function unique2(arrs){
    return arrs.filter((arr,index)=>arrs.indexOf(arr) === index)
}

const list = [1,1,3,3,22];

console.log(unique(list));
console.log(unique2(list));
