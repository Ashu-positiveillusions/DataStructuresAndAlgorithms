// find the maximum sum of two elements in an array
//  reverse each word of a sentence


// unique eleemtns in an array

// function uniqueElements(array){
//     let map = new Map()
//     for (let i=0; i<array.length; i++){
//         if(map.get(array[i]) == undefined) map.set(array[i], 1)
//         else map.set(array[i], map.get(array[i])+1)
//     }
//     // return [...map.keys()]
//     let res = []
//     for(let pairs of map){
//         if(pairs[1]>=1) res.push(pairs[0])
//     }
//     return res
// }

// uniqueElements([2,3,4,3,5,5,6,7,8,8,8,8,8,2,1])


// find unique pairs of elements where sum is equal to a target k

// function targetSum(array,k){
//     let map = new Map()
//      for (let i=0; i<array.length; i++){
//         if(map.get(array[i]) == undefined) map.set(array[i], 1)
//         else map.set(array[i], map.get(array[i])+1)
//     }
//     let resMap =new Map()
//       for(let pairs of map){
//             if(map.has(k-pairs[0])) {
//                 if(!(resMap.has(k-pairs[0]))) resMap.set(pairs[0],k-pairs[0])
//             }
//      }
// return [...resMap.entries()]
// }

    
// targetSum([1,2,4,3], 5)


// take an input and check whether input is integer or not
// not working exactly for array check

// function checkInt(a){
//     let pattern = /^-?[0-9]+$/;
//     let result = pattern.test(a)
//     return result
// }

// checkInt([123456789,"defttg"])

// foobar - take a number and if it is a multiple of 3 print foo,
// if multiple of 5 print bar
// if multiple of both 5 and 3 print "foobar"
// if multiple of none print nothing

function foobar(num){
    if(num%3 == 0) console.log("foo")
    if(num%5 == 0) console.log("bar")
}

foobar(30)