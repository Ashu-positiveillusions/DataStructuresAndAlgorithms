function mergeSort(arr,left, right){
    if(left>=right) return
    let mid =left+ parseInt((right-left)/2);
    mergeSort(arr,left,mid);
    mergeSort(arr,mid+1,right);
    merge(arr,left,mid,right);
}

function merge(arr, left, mid, right)
{
    let n1 = mid - left + 1;
    let n2 = right - mid;
  
    // Create temp arrays
    let arr1 = new Array(n1); 
    let arr2 = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        arr1[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        arr2[j] = arr[mid + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray, second subarray and original array
    let i = 0, j=0, k=left

    while (i < n1 && j < n2) {
        if (arr1[i] > arr2[j]) {
            arr[k] = arr2[j];
            j++;
        }else{
            arr[k] = arr1[i];
            i++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // arr1[], if there are any
    while (i < n1){
        arr[k] = arr1[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // arr2[], if there are any
    while (j < n2){
        arr[k] = arr2[j];
        j++;
        k++;
    }
}
let arr = [5,3,100,43,56,-234, 76,-123]
mergeSort(arr, 0, 7)
console.log(arr)