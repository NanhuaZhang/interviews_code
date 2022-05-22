/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const strList = [];
    let path = ''

    dfs(0,0,n,path,strList);
    return strList;
};

function dfs(left,right,n,path,strList){
    if(left === n && right===n){
        strList.push(path)
        return;
    }

    if(left<right){
        return;
    }

    if(left < n){
        dfs(left+1,right,n,path+'(',strList);
    }

    if(right < n){
        dfs(left,right+1,n,path+')',strList);
    }

}

//https://leetcode.cn/problems/generate-parentheses/submissions/
