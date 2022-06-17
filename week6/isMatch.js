/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sL = s.length;
    let pL = p.length;

    // 空串起手
    const list = new Array(sL+1).fill(false).map(()=>new Array(pL+1).fill(false));
    list[0][0] = true;

    for(let i = 0; i <= sL ;i++){
        for(let j = 1;j <= pL ;j++){
            // 第j个元素
            if(p.charAt(j-1) === '*'){
                list[i][j] = list[i][j-2];
                if(matches(s,p,i,j-1)){
                    list[i][j] =  list[i-1][j] || list[i][j-2];
                }
            }else{
                if(matches(s,p,i,j)){
                    list[i][j] = list[i-1][j-1];
                }
            }
        }
    }

    return list[sL][pL];
};

function matches(s,p,i,j){
    if(i === 0){
        return false;
    }

    if(s.charAt(i-1) === p.charAt(j-1)){
        return true;
    }

    if(p.charAt(j-1) === '.'){
        return true;
    }

    return false;
}
