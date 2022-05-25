/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const set = new Set();
    let start = 0;
    let length = s.length;

    for(let i=0;i<length;i++){

        if(i!==0){
            set.delete(s.charAt(i-1));
        }

        while(start < length && !set.has(s.charAt(start))){
            set.add(s.charAt(start));
            start++;
        }

        maxLength = Math.max(maxLength,start - i);
    }
    return maxLength;
};
