/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const flags = new Array(numCourses).fill(0);
    const map = new Map();

    prerequisites.forEach((pre)=>{
        const start = map.get(pre[1]);
        if(!start){
            map.set(pre[1],[pre[0]])
        }else{
            start.push(pre[0]);
        }
    })

    return flags.every((_val,node)=>dfs(node,flags,map))
};

function dfs(node,flags,map){
    if(flags[node] === 1){
        return false;
    }

    if(flags[node] === -1){
        return true;
    }
    flags[node] = 1;

    const otherBranches = map.get(node);

    if(!otherBranches){
        flags[node] = -1;
        return true;
    }

    for(let i=0;i<otherBranches.length;i++){
        if(!dfs(otherBranches[i],flags,map)) return false;
    }

    flags[node] = -1;
    return true;
}
