/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let counts = 0;
    for(let i=0;i<nums.length;i++){
        let sum = nums[i];
        if(sum ===k){
            counts++;
        }

        for(let j=i+1;j<nums.length;j++){
            sum += nums[j];

            if(sum === k){
                counts++;
            }
        }
    }

    return counts;
};
