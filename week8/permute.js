/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const list = [];
    dfs(nums,list);
    return list;
};

function dfs(nums,list,pathList=[]){
    if(pathList.length === nums.length){
       list.push([...pathList]);
       return;
    }

    for (let i = 0; i < nums.length; i++) {
        if(pathList.includes(nums[i])) continue;

        pathList.push(nums[i]);
        dfs(nums,list,pathList)
        pathList.pop();
    }
}


console.log(permute([1,2,3]))
