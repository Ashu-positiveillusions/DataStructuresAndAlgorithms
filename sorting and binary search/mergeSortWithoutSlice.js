function mergeSort(arr, left, right) {
     if(left >= right) return;
    const mid = parseInt((left+right)/2);

    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1, right)
    merge(arr,left,mid,right) //mid is actually dividing array into two halves - (left-mid) and (mid+1, right)
}

function merge(arr,left,mid,right){
    let n1 = mid - left + 1
    let n2 = right - mid
    let arr1 =new Array(n1)
    let arr2 = new Array(n2)
    for(let i=0;i<n1;i++){
        arr1[i] = arr[left+i]
    }
    for(let i=0;i<n2;i++){
        arr2[i] = arr[mid+i+1]
    }
   
    let l_i=0
    let r_i=0
    let k=left
    while(l_i<n1 && r_i<n2){
        if(arr1[l_i] > arr2[r_i]){
            arr[k] = arr2[r_i]
            r_i++
        }else{
            arr[k] = arr1[l_i]
            l_i++
        }
        k++
    }    

    //if either arr1 or arr2 is exhausted
    while(r_i<n2){
        arr[k] = arr2[r_i]
        r_i++
        k++
    }
    while(l_i<n1){
        arr[k] = arr1[l_i]
        l_i++
        k++
    }
}

let arr = [0,-1, 3,6, 5,10, 9,12]
mergeSort(arr,0,7)
console.log(arr)