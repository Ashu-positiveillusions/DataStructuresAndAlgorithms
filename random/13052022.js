//binary search

function binarySearch(arr,start, end){
    if(end>=start){
        mid = Maths.floor(start + (end-start)/2)
        if(num == arr[mid]) return mid
        else if(num>arr[mid]) return binarySearch(arr, mid+1, end,num)
        else if (num>arr[mid]) return binarySearch(arr, mid-1, end,num)
    }
    return false
}


// bubble sort

function bubbleSort(arr){
    
  let i, j;
  let len = arr.length;
    
  let isSwapped = false;
    
  for(i =0; i < len; i++){
      
    isSwapped = false;
      
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
          let temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }
      
    // IF no two elements were swapped by inner loop, then break 
      
    if(!isSwapped){
      break;
    }
  }
    
  // Print the array
  console.log(arr)
}

// time complexity is very high

// merge sort - divide and conquer




