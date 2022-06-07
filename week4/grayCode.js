/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const result = [];
    for(let i=0;i< 1 << n;i++){
        result.push((i >> 1)^i);
    }
    return result;
};
