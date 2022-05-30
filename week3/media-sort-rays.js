/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const list = [...nums1,...nums2].sort((a,b)=>a-b);

    const index = Math.floor(list.length/2);
    if(list.length % 2 === 1){
        return list[index]
    }
    return (list[index -1] + list[index])/2
};
