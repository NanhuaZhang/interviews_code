/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1List = version1.split('.').map(ch=>Number(ch));
    const v2List = version2.split('.').map(ch=>Number(ch));

    let compareLength = Math.max(v1List.length,v2List.length);
    for(let i =0;i<compareLength;i++){
        if(v1List[i] || v2List[i] ){
            const left = v1List[i] ?? 0;
            const right = v2List[i] ?? 0;
            if(left > right){
                return 1;
            }else if(left < right){
                return -1;
            }
        }
    }

    return 0;
};
