/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxAns = 0;
    const m = grid.length;
    const n = grid[0].length;

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === 1){
                maxAns = Math.max(dfs(i,j,grid),maxAns);
            }
        }
    }

    return maxAns;
};

const directions = [[-1,0],[1,0],[0,-1],[0,1]];

function dfs(i,j,grid){
    const m = grid.length;
    const n = grid[0].length;
    if(i >= m || i < 0 || j >= n || j < 0 || grid[i][j] === 0){
        return 0;
    }

    grid[i][j] = 0;

    let path = 1;
    directions.forEach(direction=>{
        path += dfs(i+direction[0],j+direction[1],grid);
    })

    return path;
}
