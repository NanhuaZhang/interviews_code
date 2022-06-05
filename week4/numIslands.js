/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid && grid.length ===0){
        return 0;
    }

    const n = grid.length;
    const m = grid[0].length;

    let result = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j] === '1'){
                result += 1;
                dfs(grid,i,j);
            }
        }
    }

    return result;
};

function dfs(grid,x,y){
    const nx = grid.length;
    const ny = grid[0].length;


    if (x < 0 || y < 0 || x >= nx || y >= ny || grid[x][y] == '0') {
        return;
    }

    grid[x][y] = '0';

    dfs(grid,x,y+1);
    dfs(grid,x,y-1);
    dfs(grid,x+1,y);
    dfs(grid,x-1,y);
}
