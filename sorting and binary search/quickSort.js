function quickSort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index, arr[p]
        // is now at right place
        let pi = partition(arr, low, high);
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */


function partition(arr, low, high) {
 
    // pivot
    let pivot = arr[high];
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
            // Increment index of
            // smaller element
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]
    return (i + 1);
}

let arr = [5,3,100,43,56,-234, 76,-123]
quickSort(arr, 0, 7)
console.log(arr)