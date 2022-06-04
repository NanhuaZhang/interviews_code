/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return binarySearch(0,nums.length-1,nums);
};

function binarySearch(start,end,nums){
    if(start > end){
        return null;
    }
    const mid = Math.floor((start+end)/2);

    if(mid === 0){
        if((nums.length>0 && nums[mid] > nums[mid+1]) || nums.length === 1){
            return mid;
        }
    }else if(mid === nums.length-1){
        if(nums.length>0 && nums[mid] > nums[mid-1]){
            return mid;
        }
    }else if(nums[mid]>nums[mid-1] && nums[mid] > nums[mid+1]){
        return mid;
    }

    const left = binarySearch(start,mid-1,nums);
    if(typeof left === 'number'){
        return left;
    }

    const right = binarySearch(mid+1,end,nums);
    if(typeof right === 'number'){
        return right;
    }
}
