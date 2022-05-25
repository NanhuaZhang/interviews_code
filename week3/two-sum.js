/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map();
    const result = [];

    nums.forEach((num,index)=>{
        const targetHash = hashMap.get(target -num);
        if(targetHash!==undefined){
            result.push(targetHash,index);
        }
        hashMap.set(num,index);
    })

    return result;
};
