/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const row = new Array(9).fill(0).map(()=>new Array(10));
    const column = new Array(9).fill(0).map(()=>new Array(10));
    const nineSquare = new Array(3).fill(0).map(()=>new Array(3).fill(0).map(()=>new Array(10).fill(0)));

    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] !== '.'){
                const numer = Number(board[i][j]);
                row[i][numer] = true;
                column[j][numer] = true;
                nineSquare[Math.floor(i/3)][Math.floor(j/3)][numer] = true;
            }
        }
    }

    dfs(board,row,column,nineSquare,0,0)
};

function dfs(board,row,col,nineSquare,startRow,startCol){
    if(board.length === startRow){
        startCol+=1;
        startRow = 0;

        if(board[0].length === startCol){
            return true
        }
    }

    if(board[startRow][startCol] === '.'){
        for(let i = 1;i<=9;i++){
            const canInsert = !row[startRow][i] && !col[startCol][i] && !nineSquare[Math.floor(startRow/3)][Math.floor(startCol/3)][i];

            if(canInsert){
                row[startRow][i] = true;
                col[startCol][i] = true;
                nineSquare[Math.floor(startRow/3)][Math.floor(startCol/3)][i] = true;

                board[startRow][startCol] = String(i);

                if(dfs(board,row,col,nineSquare,startRow+1,startCol)){
                    return true;
                }

                board[startRow][startCol] = '.';
                row[startRow][i] = false;
                col[startCol][i] = false;
                nineSquare[Math.floor(startRow/3)][Math.floor(startCol/3)][i] = false;
            }
        }

    }else{
        return dfs(board,row,col,nineSquare,startRow+1,startCol);
    }

    return false;
}


const test =[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

solveSudoku(test)

console.log(test)
