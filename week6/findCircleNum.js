/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const citys = isConnected.length;
    const visited = new Array(citys).fill(false);
    let count = 0;

    for(let i=0;i<citys;i++){
        if(!visited[i]){
            dfs(i,isConnected,visited)
            count++;
        }
    }

    return count;
};

function dfs(node,isConnected,visited){
    visited[node] = true;

    for(let i=0;i<isConnected.length;i++){
        if(isConnected[node][i] === 1 && !visited[i]){
            dfs(i,isConnected,visited);
        }
    }
}


console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]))
