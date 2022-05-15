/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const length = s.length;
    const f = new Array(length+1).fill(0);
    f[0] = 1;

    for(let i=1;i<=length;i++){
        if(s[i-1] !=='0'){
            f[i] += f[i-1];
        }

        if(i > 1 && s[i-2]!=='0' && (Number(s[i-2] + s[i-1])) <= 26){
            f[i] += f[i-2]
        }
    }

    return f[length];
};
