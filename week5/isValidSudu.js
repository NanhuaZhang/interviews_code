
var isValidSudoku = function(board) {
    const colList = new Array(9).fill(0).map(()=>new Array(10).fill(0));
    const rowList = new Array(9).fill(0).map(()=>new Array(10).fill(0));

    const squareList = new Array(3).fill(0).map(()=>new Array(3).fill(0).map(()=>new Array(10).fill(0)));

    for(let i =0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j] !== '.'){
                const num = Number(board[i][j]);

                if(rowList[i][num] || colList[j][num] || squareList[Math.floor(i/3)][Math.floor(j/3)][num]){
                    return false
                }
                rowList[i][num] = true;
                colList[j][num] = true;
                squareList[Math.floor(i/3)][Math.floor(j/3)][num] = true;
            }
        }
    }

    return true;
};
