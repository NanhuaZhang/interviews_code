/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const stairList = new Array(n+1).fill(0);
    stairList[0] = 1;
    stairList[1] = 1;
    for(let i=2;i<=n;i++){
        stairList[i] = stairList[i-2] + stairList[i-1];
    }

    return stairList[n];
};
