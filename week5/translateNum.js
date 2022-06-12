

/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    const countList = [1];

    const numList = [num%10];

    num = Math.floor(num/10);

    while(num > 0){
        const yu = num % 10;
        num = Math.floor(num/10);

        numList.push(yu);

        const lastIndex = numList.length -1;
        const countLastIndex = countList.length -1;

        if(numList[lastIndex] === 0 || numList[lastIndex] * 10 + numList[lastIndex -1]>25){
            countList.push(countList[countLastIndex]);
        }else{
            if(countList.length === 1){
                countList.push(countList[0] + 1);
            }else{
                countList.push(countList[countLastIndex] + countList[countLastIndex - 1])
            }
        }
    }

    return countList.pop();
};
