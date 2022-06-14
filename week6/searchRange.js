var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length-1;

    while(start < end){
        const mid = Math.floor((start+end)/2);

        if(nums[mid] >= target){
            end = mid;
        }else {
            start = mid + 1;
        }
    }
    const rightIndex = end;
    if(nums[rightIndex] !== target){
        return [-1,-1];
    }

    start = 0;
    end = nums.length-1;

    while(start < end){
        const mid = Math.floor((start+end+1)/2);

        if(nums[mid] <= target){
            start = mid;
        }else {
            end = mid - 1;
        }
    }

    const leftIndex = start;

    return [rightIndex,leftIndex];
};
