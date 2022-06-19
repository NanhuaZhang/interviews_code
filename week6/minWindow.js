/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let start = 0;
    let end = 0;

    const tMap = new Map();

    for(let i=0;i<t.length;i++){
        setKey(tMap,t.charAt(i));
    }

    let tempMap = new Map();
    tempMap.set(s.charAt(start),1);

    let result = '';

    while(end <= s.length && start <= end){
        if(check(tMap,tempMap)){
            const curStr = s.substring(start,end+1);
            if(result){
                result = result.length > curStr.length ? curStr : result;
            }else{
                result = curStr;
            }
            cutKey(tempMap,s.charAt(start));
            start += 1;
        }else{
            end += 1;
            setKey(tempMap,s.charAt(end));
        }
    }

    return result;
};


function cutKey(map,ch){
    const newCount = map.get(ch) -1;
    map.set(ch,newCount);
}

function setKey(map,ch){
    let newCount = 1;
    if(map.has(ch)){
        newCount = map.get(ch) + 1;
    }
    map.set(ch,newCount);
}

function check(targetMap,sourceMap){
    for(let [ch,count] of targetMap){
        if(!sourceMap.get(ch) || sourceMap.get(ch) < count){
            return false;
        }
    }
    return true;
}


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = {};

    for(let i=0;i<t.length;i++){
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
    }

    let c=0;
    let l=0;
    let result = '';

    for(let j=0;j<s.length;j++){
        tMap[s[j]] = (tMap[s[j]] ?? 0) -1;
        if(tMap[s[j]]>=0){
            c++;
        }

        while(c===t.length && tMap[s[l]]<0){
            tMap[s[l]] ++;
            l++;
        }

        if(c===t.length){
            if(result==='' || j-l+1<result.length){
                result = s.slice(l,j+1);
            }
        }

    }

    return result;
};


const a = "a"
const b = "a"


console.log(minWindow(a,b))
