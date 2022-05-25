/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortNums = nums.sort((a,b)=>a-b);
    const result = [];

    for(let i=0;i<sortNums.length-2;i++){
        if(sortNums[i]>0){
            break;
        }

        if(sortNums[i] === sortNums[i-1] && i<sortNums.length-2 && i >= 1){
            continue;
        }

        let p = i+1;

        while(p < sortNums.length-1){
            let start = sortNums[p];
            let q = p+1;

            if(sortNums[p] === sortNums[p-1] && p -1 > i){
                p += 1;
                continue;
            }

            while(q < sortNums.length){
                let end = sortNums[q];
                if(sortNums[q] === sortNums[q-1] && q-1 > p){
                    q++;
                    continue;
                }
                if(start + end + sortNums[i] === 0){
                    result.push([sortNums[i],start,end])
                }else if(start + end + sortNums[i]>0){
                    break;
                }

                q++;
            }

            p++;
        }
    }

    return result;
};
