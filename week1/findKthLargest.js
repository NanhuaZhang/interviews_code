/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    return nums.sort((a,b)=>a - b)[nums.length - k]
};

const list = [3,2,1,5,6,4];
const k = 2;

console.log(findKthLargest(list,k));

const list1 = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
const k1 = 2;

console.log(findKthLargest(list1,k1))

