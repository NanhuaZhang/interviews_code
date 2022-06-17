/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length -1;

    while(start < end){
        const mid = Math.floor((start + end)/2)+1;
        if(start === end -1){
            return Math.min(nums[start],nums[end]);
        }

        if(nums[mid] < nums[start]){
            end = mid;
            start +=1;
        }else if (nums[mid] > nums[end]){
            start = mid;
        }else{
            end = end -1;
        }

    }

    return nums[0];
};
