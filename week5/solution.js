/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.origin = nums;
    this.nums = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.origin.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = 0;i<this.nums.length-1;i++){
        const j = Math.floor(Math.random()*this.nums.length-i) + i;
        const temp = this.nums[j];
        this.nums[j] = this.nums[i];
        this.nums[i] = temp;
    }
    return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
