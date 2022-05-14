function sortArray(arrs){
    if(arrs.length > 0){
        quickSort(0,arrs.length-1,arrs);
        return arrs;
    }
    return [];
}

function quickSort(start,end,arrs){
    if(start > end){
        return;
    }

    const mid = sort(start,end,arrs);

    quickSort(start,mid-1,arrs);
    quickSort(mid+1,end,arrs);
}

function sort(left,right,arrs){
    const base = arrs[left];

    while (left <right){
        while (arrs[right] >=base && right>left){
            right--;
        }
        arrs[left] = arrs[right];

        while (arrs[left] <= base && right>left){
            left++
        }
        arrs[right] = arrs[left];
    }

    arrs[left] = base;

    return left;
}

const list = [10,2,3,4,5,1,9,221];

console.log(sortArray(list))

