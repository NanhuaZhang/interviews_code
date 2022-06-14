/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const reslut = [];

    for(let i=0;i<firstList.length;i++){
        for(let j=0;j<secondList.length;j++){
            const ansList = compareList(firstList[i],secondList[j]);

            if(ansList && ansList.length > 0){
                reslut.push(ansList);
            }
        }
    }
    return reslut;
};

function compareList(firstList,secondList){
    if(!firstList || !secondList){
        return null;
    }

    const startF = firstList[0];
    const endF = firstList[1];

    const startS = secondList[0];
    const endS = secondList[1];

    if(startF >= startS && startF <= endS) {
        if(endF <= endS){
            return [startF,endF]
        }else {
            return [startF,endS]
        }
    }else if(startS >= startF && startS <= endF){
        if(endS <= endF){
            return [startS,endS]
        }else {
            return [startS,endF]
        }
    }
    return []
}
