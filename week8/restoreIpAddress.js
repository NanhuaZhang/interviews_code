/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length > 12 || s.length < 4){
        return [];
    }

    const ipList = [];
    // 第一个ip选择几位数
    dfs(s,0,0,[],ipList);
    dfs(s,0,1,[],ipList);
    dfs(s,0,2,[],ipList);

    return ipList.map(ipPath => ipPath.join('.'))
};

/**
 * @param {string} str
 */
function dfs(str,start,end,ip,ipList){
    const totalLength = str.length;
    const restLength = totalLength - start;
    const restIpLength = 4 - ip.length;


    if(restLength < 0 || restIpLength < 0 || restLength < restIpLength || restLength > restIpLength * 3  || (str.charAt(start) === '0') && end > start){
        return;
    }

    const currentIp = str.substring(start,end+1);

    if(Number(currentIp) > 255){
        return;
    }

    const currentIpList = [...ip,currentIp];

    if(end === str.length - 1 && currentIpList.length === 4){
        ipList.push(currentIpList);
        return;
    }

    dfs(str,end+1,end+1,[...currentIpList],ipList);
    dfs(str,end+1,end+2,[...currentIpList],ipList);
    dfs(str,end+1,end+3,[...currentIpList],ipList);
}

console.log(restoreIpAddresses("101023"))
// console.log(restoreIpAddresses("0000"))
// console.log(restoreIpAddresses("25525511135"))
