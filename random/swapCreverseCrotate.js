
// function swap (a,b){
//   // [b,a] = [a,b]
//   // return [a,b]

//   a= a+b
//   b = a-b
//   a = a-b
//   return [a,b]
// }

// swap(1,3)


// swap two strings without using a third variable
// concat both strings
// x = x+y
// y = x-y -splice
// x = x-y
// function swapStrings(x,y){
//   [x,y] = [y,x]
//   console.log(x,",",y)
// }

// swapStrings("third", "fourth")



// ////reverse an array w/o using ectra array

function reverseArray(arr){

  let i =0
  let j=arr.length-1
  while(i<j){

    // [arr[i],arr[j]] = [arr[j],arr[i]]
    // or you can call the above swap function
    // let temp = arr[i]
    // arr[i] = arr[j]
    // arr[j] = temp

    // 3rd way to swap
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
    i++
    j--
  }
  return arr
}

reverseArray([1,2,3,4,5])

// write a JS program to cyclically rotate an array - rotate(arr,d)
function rotate(arr,d){
  arr = reverseArray(arr)
  return reverseArray(arr.slice(0,d)).concat(reverseArray(arr.slice(d,arr.length)))
}

rotate ([1,2,3,4,5],3)