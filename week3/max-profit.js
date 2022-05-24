/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxPrice = 0;

    for(let i = 0;i<prices.length;i++){
        const currentPrice = prices[i];
        minPrice = Math.min(minPrice,currentPrice);
        maxPrice = Math.max(maxPrice,currentPrice-minPrice);
    }

    return maxPrice;
};
