/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const map = new Map();
    nums.forEach(num=>{
        const value = map.get(num);
        if(value){
            map.set(num,value +1);
        }else{
            map.set(num,1);
        }
    })

    const branches = [...map.keys()];
    const tempList = [];

    branches.forEach(branch =>{
        const list = [branch];
        dfs(1,branches,nums.length,tempList,map,list);
    })
    return tempList;
};

function dfs(start,branches,n,tempList,map,list){
    if(start === n){
        tempList.push(list);
        return;
    }

    branches.forEach(branch=>{
        const newList = [...list];

        const exist = countLength(newList,branch);
        if(exist === map.get(branch)){
            return;
        }

        newList.push(branch);
        dfs(start+1,branches,n,tempList,map,newList);

    })

}

function countLength(nums,key){
    return nums.filter(num => num===key).length;
}


console.log(permuteUnique([1,2,3]))
console.log(permuteUnique([1,2,2]))
