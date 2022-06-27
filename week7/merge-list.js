/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l1Index = m - 1;
    let l2Index = n -1;

    for(let i = m +n-1;i>=0;i--){
        if(l1Index<0){
            nums1[i] = nums2[l2Index];
            l2Index--;
            continue
        }
        if(l2Index<0){
            break;
        }

        let maxNum;
        if(nums1[l1Index]>nums2[l2Index]){
            maxNum = nums1[l1Index];
            l1Index--;
        }else{
            maxNum = nums2[l2Index];
            l2Index--;
        }
        nums1[i] = maxNum;
    }
};
