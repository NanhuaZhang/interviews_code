/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
    const compareLength = num1.length > num2.length ? num1.length : num2.length;

    let result = '';
    let overFlow = 0;

    for (let i = 1; i <= compareLength; i++){
        const numL1 = Number(num1[num1.length - i] ?? 0);
        const numL2 = Number(num2[num2.length - i] ?? 0) ;

        let sum = numL1 + numL2 + overFlow;

        if(overFlow === 1){
            overFlow = 0;
        }

        if(sum >= 10){
            overFlow = 1;
            sum -= 10
        }

        result = String(sum) + result
    }

    if(overFlow === 1){
        result = '1' + result;
    }

    return result;
};

console.log(addStrings('123','1'))
console.log(addStrings('9','9'))
console.log(addStrings('123456789','987654321'))
