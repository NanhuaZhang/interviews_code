/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxValue = nums[0];
    let maxLastValue = nums[0];
    let minValue = nums[0];

    nums.forEach((num,index)=>{
        if(index!==0){
            const lastValue = maxLastValue;
            maxLastValue = Math.max(lastValue*num,minValue*num,num);
            minValue = Math.min(lastValue*num,minValue*num,num);

            maxValue = Math.max(maxLastValue,maxValue);
        }
    })

    return maxValue;
};

console.log(maxProduct(
    [2,3,-2,4]))
