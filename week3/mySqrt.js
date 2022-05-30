/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while(left <= right){
        const mid = Math.floor((left + right)/2);
        const center2 = mid * mid;

        if(center2 === x){
            return mid;
        }

        const centerBorder2 = (mid+1)*(mid+1);
        if(center2 < x && centerBorder2 > x){
            return mid;
        }

        if(center2 < x){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }

    return 0;
};
