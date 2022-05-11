function sortArray(arrs){
    if(arrs.length > 0){
        quickSort(0,arrs.length-1,arrs);
        return arrs;
    }
    return [];
}

function quickSort(start,end,sortArray){
    if(start>end){
        return;
    }
    const mid = sort(start,end,sortArray);
    quickSort(start,mid-1,sortArray);
    quickSort(mid+1,end,sortArray);
}

function sort(left, right, arr) {
    const base = arr[left];

    while (left < right){
        while (arr[right] >= base && right > left){
            right --;
        }
        arr[left] = arr[right];

        while (arr[left] <= base && right > left){
            left ++;
        }
        arr[right] = arr[left]
    }
    arr[left] = base;

    return left;
}

const list = [10,2,3,4,5,1,9,221];

console.log(sortArray(list))

