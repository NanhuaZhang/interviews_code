/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let preEle = 0, totalArr = nums[0];

    nums.forEach((num)=>{
        preEle = Math.max(preEle + num, num);

        totalArr = Math.max(totalArr, preEle);
    })

    return totalArr;
};
