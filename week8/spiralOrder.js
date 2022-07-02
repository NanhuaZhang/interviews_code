/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const visitedList = new Array(m).fill(0).map(_=>new Array(n).fill(0));

    const result = [];

    const directions = [[0,1],[1,0],[0,-1],[-1,0]]

    let x = 0;
    let y = 0;
    visitedList[x][y] = 1;
    result.push(matrix[x][y]);

    const maxLength = m*n;

    while(result.length !== maxLength){
        directions.forEach(direct =>{
            let tempX = direct[0] + x;
            let tempY = direct[1] + y;

            if(tempX=== m || tempX<0 || tempY===n || tempY<0){
                return;
            }

            x = tempX;
            y = tempY;

            while(visitedList[x][y] === 0){
                result.push(matrix[x][y]);
                visitedList[x][y] = 1;

                x = direct[0] + x;
                y = direct[1] + y;

                if(x=== m || x<0 || y===n || y<0 || visitedList[x][y] === 1){
                    x = x - direct[0];
                    y = y - direct[1];
                    break;
                }
            }
        })
    }

    return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
console.log(spiralOrder([[1,2,3,4]]));
console.log(spiralOrder([[1],[2],[3]]));
