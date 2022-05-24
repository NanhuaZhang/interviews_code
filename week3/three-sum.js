/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length <3){
        return [];
    }

    const sortNums = nums.sort((a,b)=>a-b);
    const result = [];

    let startX = 0;
    let startY = 1;

    while(startX <= sortNums.length-3){
        if(sortNums[startX]>0){
            break;
        }

        if(startY < sortNums.length -1  && startY >=1 && sortNums[startY] === sortNums[startY-1]){
            startY += 1;
            continue;
        }

        if(startY === sortNums.length -1){
            startX += 1;
            startY = startX + 1;
        }

        if(startX > 0 && sortNums[startX] === sortNums[startX-1]){
            startX += 1;
            startY = startX + 1;
            continue;
        }

        let startZ = startY + 1;
        while(startZ <= sortNums.length -1){
            if(sortNums[startZ] === sortNums[startZ+1] && startZ <= sortNums.length -2){
                startZ += 1;
                continue;
            }
            if(sortNums[startX] + sortNums[startY] + sortNums[startZ] === 0){
                result.push([sortNums[startX],sortNums[startY],sortNums[startZ]])
            }
            startZ += 1;
        }
        startY += 1;
    }

    return result;
};


console.log(threeSum([0,0,0]))
