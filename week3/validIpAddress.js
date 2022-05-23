/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    const ip4List = queryIP.split('.');
    if(ip4List.length === 4){
        const result = ip4List.every(isIp4);
        if(result){
            return "IPv4";
        }
    }

    const ip6List = queryIP.split(':');
    if(ip6List.length === 8){
        const result = ip6List.every(isIp6);
        if(result){
            return "IPv6";
        }
    }

    return 'Neither';
};

function isIp4(str){
    const tendigits = '0123456789';
    const isNum = str.split('').every((ch)=>tendigits.includes(ch));

    if(!isNum){
        return false;
    }

    const number = parseInt(str,10);
    if(str[0] === '0' && str.length >1){
        return false;
    }

    return 0 <= number && number <= 255;

}

function isIp6(str){
    if(1 > str.length || str.length > 4){
        return false
    }

    const hexdigits = '0123456789abcdefABCDEF';

    return str.split('').every((ch)=>hexdigits.includes(ch));
}
