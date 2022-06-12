/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const qIndexList = [];
    for(let i = 0;i<n;i++){
        const forbiddenMap = new Map();
        const qIndex = [i];
        dfs(n,0,i,qIndex,forbiddenMap,qIndexList)
    }

    qIndexList.forEach(list=> {
        result.push(getStringList(list));
    })
    return result;
};

function dfs(n,startRow,startCol,qIndex,forbiddenMap,qIndexList){
    if(forbiddenMap.has(`${startRow}_${startCol}`)){
        forbiddenMap.clear();
        return false;
    }

    if(n === startRow + 1){
        forbiddenMap.clear();
        qIndexList.push(qIndex)
        return true;
    }

    for(let i = startRow;i<n;i++){
        forbiddenMap.set(`${i}_${startCol}`,1);
    }

    let row = startRow;
    let col = startCol;

    while(row+1<n && col+1<n){
        forbiddenMap.set(`${row+1}_${col+1}`,1);
        row+=1;
        col+=1;
    }

    row = startRow;
    col = startCol;

    while(row+1<n && col-1>=0){
        forbiddenMap.set(`${row+1}_${col-1}`,1);
        row+=1;
        col-=1;
    }

    for(let col=0;col<n;col++){
        const newMap = new Map(forbiddenMap);
        const newQIndex = [...qIndex];
        newQIndex.push(col);
        dfs(n,startRow+1,col,newQIndex,newMap,qIndexList);
    }

    return true;
}

/**
 * @param {number[]} indexList
 */
function getStringList(indexList){
    const n = indexList.length;
    const fullStringList = new Array(n).fill(0).map(()=>new Array(n).fill('.'));

    indexList.forEach((value,index)=>{
        fullStringList[index][value] = 'Q';
    })

    return fullStringList.map((list=>list.join('')));
}


console.log(solveNQueens(5))
