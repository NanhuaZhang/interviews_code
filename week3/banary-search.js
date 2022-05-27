/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(0,nums.length -1,nums,target);
};

function binarySearch(start,end,nums,target){
    if(start + 1 === end || start === end){
        if(nums[start] === target){
            return start;
        }
        if (nums[end] === target){
            return end;
        }
        return -1;
    }

    const center = Math.floor((end - start) / 2) + start;

    if(nums[center] === target){
        return center;
    }

    if(nums[center] > target) {
        return binarySearch(start, center,nums, target)
    }
    else {
        return binarySearch(center, end, nums, target)
    }
}


const bSearch = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        const mid = Math.floor((left + right)/2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] > target){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return  -1;
}

console.log(search([-1,0,3,5,9,12],5))
console.log(bSearch([-1,0,3,5,9,12],2))
