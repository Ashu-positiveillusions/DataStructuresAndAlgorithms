// find elements in array which dont have a pair = frequency is not even

// function isPair(array){
//     let map = new Map()
//     for(let i=0; i< array.length; i++){
//         if(!map.has(array[i])) map.set(array[i],1)
//         else map.set(array[i], map.get(array[i])+1)
    
//     }
//     let res = []
//     for(let pairs of map){
//         if(pairs[1] % 2 === 1) res.push(pairs[0])
//     }
//     return res
// }

// isPair([1,1,2,2,3,3,3,5,5,5,5,5,6,6,4,8,4])


// write a function to calculate the max sum of three consecutive numbers

function maxSum(array,k){
    if(array.length < k) return
    let sum = 0
    for(let i=0; i<k; i++){
        sum += array[i]
    }console.log(sum)
    let maxSum = sum
    for(let i = k; i<array.length; i++){
        sum = sum + array[i] - array[i - k]
        if(sum > maxSum) maxSum = sum
    }
    return maxSum;
}

maxSum([1,2,3,4,5,6,7,8,9],3)