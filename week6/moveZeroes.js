/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            zeroCount +=1;
        }else{
            nums[i-zeroCount] = nums[i];
        }
    }

    const length = nums.length;

    for(let i=1;i<=zeroCount;i++){
        nums[length - i] = 0;
    }
};

const nums = [0,1,0,3,12];

moveZeroes(nums)

console.log(nums)
