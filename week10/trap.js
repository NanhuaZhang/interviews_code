/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftMaxList = new Array(height.length).fill(0);
    leftMaxList[0] = height[0];

    for(let i=1;i<height.length;i++){
        leftMaxList[i] = Math.max(leftMaxList[i-1],height[i]);
    }

    const rightMaxList = new Array(height.length).fill(0);
    rightMaxList[height.length-1] = height[height.length-1];

    for(let i=height.length-2;i>=0;i--){
        rightMaxList[i] = Math.max(rightMaxList[i+1],height[i]);
    }

    let ans = 0;
    for(let i=0;i<height.length;i++){
        ans += Math.min(leftMaxList[i],rightMaxList[i]) -height[i];
    }

    return ans;
};
