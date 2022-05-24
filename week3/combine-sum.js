/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    dfs(0,result,candidates,target);

    return result;
};

function dfs(total,result,branches,target,list=[]){
    if(total > target){
        return;
    }

    if(total === target){
        result.push(list);
        return;
    }

    for(let i=0;i<branches.length;i++){
        const branch = branches[i];
        const newList = [...list];

        newList.push(branch);
        const newBranches = branches.slice(i);

        dfs(total + branch,result,newBranches,target,newList);
    }

}
