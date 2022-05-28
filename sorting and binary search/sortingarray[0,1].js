// sort an array of 0,1s --- [0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1]

// function sort01(array){
//     let count0 = 0
//     for (let i=0; i<array.length; i++){
//         if(array[i] === 0) count0++
//     }
//     let count1 = array.length - count0

//     let currentPos = 0
//     while (count0>0){
//         array[currentPos] = 0
//         currentPos ++
//         count0 --
//     }
//      while (count1>0){
//         array[currentPos] = 1
//         currentPos ++
//         count1 --
//     }
//     return array
// }

// sort01([0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1])

// alternate method

// function sort02 (array){
//     let left =0; right = array.length-1
//     while(left - right){
//         while(array[left] == 0 && left < right){
//             left ++
//         }
//         while(array[right] == 1 && left<right){
//             right --
//         }
//         if(left<right)
//             [array[left], array[right]] = [array[right],array[left]]
//     }
//     return array
// }

// sort02([0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1])


// sort an array of 0,1,2 = using DNF sorting algorithm

function dnfSort(array){
    let low = 0, mid = 0, high = array.length-1
    while(mid <= high){
        if(array[mid] === 0){
            [array[mid],array[low]] = [array[low],array[mid]]
            mid ++
            low++
        }
        if(array[mid] === 1) mid++

        if(array[mid] === 2){
            [array[mid],array[high]] = [array[high],array[mid]]
            high --
        }
    }
    return array
}

dnfSort([0,1,1,1,1,1,0,2,2,2,0,0,1,1,0,0,2,2,2,0,1,0,2,0,1])