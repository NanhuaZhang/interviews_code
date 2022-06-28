// Excel的列命名规则，将整数的编号转换成字符串的形式。
// 给出一个数
// index，令
// 1=A,
// 2=B，
// 26=Z，
// 27=AA ... 最后
// 702=ZZ，每行最多有
// 702 个编号。当
// index>702 时，需要换一行，并重新开始编号，并重新从
// A 开始编号，如
// 703=A，
// 705=C。每满
// 702 个数都要换行，重新开始编号。
// 最后转换的结果为
// index 所在的行号加上他的编号。
// 如最终
// 1=1A,2=1B,3=1C,26=1Z,27=1AA,702=1ZZ,705=2C,1404=2ZZ。
// 如 705 在第 2 行，编号为 C，所以它通过转换得到的字符串是 2C

//...
const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function tranfer26(num){
    const list = [];
    let lineCount;

    let charCount = num % 702;

    if (charCount){
        lineCount = Math.floor(num / 702) + 1;
    }else {
        lineCount =  Math.floor(num / 702);
    }

    let n = charCount %26;
    let m = Math.floor((charCount - n)/26);

    if(m ===0 && n ===0){
        m = 26;
        n = 26;
    }

    if(n === 0 && m !==0){
        n = 26;
    }

    if(m === 0 && n !==0){
        n = 26;
    }
    list.push(m);
    list.push(n)


    return lineCount + list.map(num=>chars[num-1]).join('')
}

// console.log(tranfer26(705))
console.log(tranfer26(26))
// console.log(tranfer26(702))
// console.log(tranfer26(1404))
