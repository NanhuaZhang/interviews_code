/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    return mergeSort(nums,0,nums.length-1)
};

function mergeSort(nums,start,end){
    if(start >= end){
        return 0;
    }

    const mid = Math.floor((start + end)/2);

    let res = mergeSort(nums,start,mid) + mergeSort(nums,mid+1,end);

    let i = start;
    let j = mid+1;
    const temp = nums.slice(0);

    for(let k=i;k<=end;k++){
        if(i === mid+1){
            nums[k] = temp[j++]
        }
        else if(temp[i] <= temp[j] || j === end+1){
            nums[k] = temp[i++]
        }else{
            nums[k] = temp[j++];
            res += mid - i + 1
        }
    }
    return res;
}
