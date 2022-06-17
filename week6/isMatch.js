/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let duplicateStr = '';

    let randomState = false;
    let randomStateNextCh = '';

    let j = 0;

    for(let i=0;i<s.length;i++){
        if(randomState){
            // 直接匹配.*
            if(!randomStateNextCh){
                return true;
            }else{
                // 匹配.*字母
                if(s[i] === randomStateNextCh){
                    randomState = false;
                    randomStateNextCh = '';
                    j++;
                }else{
                    continue;
                }
            }
        }

        if(duplicateStr){
            if(s[i] === duplicateStr){
                if(p[j] === duplicateStr){
                    j++;
                }
                continue;
            }else{
                duplicateStr = '';
            }
        }

        if(j === p.length){
            return false;
        }

        if(p[j] === '.'){
            // .*
            if(j+1 < p.length && p[j+1] === '*'){
                randomState = true;
                if(j+2< p.length){
                    randomStateNextCh = p[j+2];
                }
                j+=2;
            }else{
                j++;
            }
            continue;
        }

        // 字母*
        if(j+1 < p.length && p[j+1] === '*'){
            duplicateStr = p[j];
        }

        if(s[i] === p[j]){
            j += 1;
            if(duplicateStr){
                j+=1;
            }
        }else{
            // 字母*匹配0个
            if(duplicateStr){
                duplicateStr = '';
                j+=2;
                i-=1;
            }else {
                return false;
            }
        }
    }

    if(j < p.length){
        return false;
    }

    if(randomState){
        return false;
    }

    return true;
};

// console.log(isMatch('aa','a*'))
console.log(isMatch('aaa','ab*a*c*a'))
// console.log(isMatch('aaa','ab*a'))
