/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let n = matrix.length;
    if(n===0){
        return false;
    }
    let m = matrix[0].length;

    let i = 0;
    let j = m-1;

    while(i<n && j>=0){
        if(matrix[i][j] === target){
            return true
        }
        if(matrix[i][j] < target){
            i++;
        }else{
            j--;
        }
    }

    return false;
};
