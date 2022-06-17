/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const visitedList = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word.charAt(0)) {
                visitedList[i][j] = 1;
                if (dfs(board, word, visitedList, i, j, 1)) {
                    visitedList[i][j] = 0;
                    return true;
                }
                visitedList[i][j] = 0;
            }
        }
    }

    return false;
};

const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]

function dfs(board, word, visitedList, m, n, findIndex) {
    if (word.length === findIndex) {
        return true;
    }

    const findChar = word.charAt(findIndex);

    for (let i = 0; i < 4; i++) {
        const direction = directions[i];
        const x = m + direction[0];
        const y = n + direction[1];
        if (x < board.length && x >= 0 && y < board[0].length && y >= 0) {
            if (!visitedList[x][y] && board[x][y] === findChar) {
                visitedList[x][y] = 1;
                findIndex++;
                if (dfs(board, word, visitedList, x, y, findIndex)) {
                    visitedList[x][y] = 0;
                    return true
                }
                visitedList[x][y] = 0;
                findIndex -- ;
            }
        }
    }

    return false;
}


console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]],
    "AAB"))
