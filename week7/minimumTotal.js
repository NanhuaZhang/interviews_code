/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dpList = new Array(triangle.length+1).fill(0);

    for(let i = triangle.length -1;i >= 0;i--){
        for(let j=0;j<=i;j++){
            dpList[j] = Math.min(dpList[j],dpList[j+1]) + triangle[i][j];
        }
    }
    return dpList[0]
};
