var uniquePaths = function(m, n) {
    return getPathLength(m,n);
};

function getPathLength(m,n){
    if(m === 1 || n === 1){
        return 1;
    }

    return getPathLength(m,n-1) + getPathLength(m-1,n)
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = new Array(m).fill(new Array(n).fill(0));
    for (let i=0;i<m;i++){
        arr[i][0] = 1;
    }
    for (let i=0;i<n;i++){
        arr[0][i] = 1;
    }

    for(let i =1;i<m;i++){
        for(let j = 1;j<n;j++){
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }

    return arr[m-1][n-1];
};


console.log(uniquePaths(51,9))
