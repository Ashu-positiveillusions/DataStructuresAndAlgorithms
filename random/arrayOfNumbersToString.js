// array of numbers to array of strings = 5 === "abcde"

function generateString(numbers){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let finalStr = "", currIndex = 0
    while(currIndex<numbers){
        finalStr += alphabet[currIndex]
        currIndex++
    }
    return finalStr;
}
// method 1
function encodeNumberWithCharacter(array){
    for(let i=0; i< array.length; i++){
        array[i] = generateString(array[i])
    }
}
let array = [1,2,4,3,5,6]
encodeNumberWithCharacter(array)
console.log(array)


// not working properly... printing in serial order of 1,2,3,4
// function encodeNumberWithCharacterOptimally(array){
//     let maxNumber = Math.max(...array)
//     console.log(maxNumber)
//     let encodeArray = []
//     for(let i=1; i<=maxNumber; i++){
//         encodeArray.push(generateString(i))
      
//     }
//     return encodeArray
// }

// let array = [1,2,4,3,5,6]
// encodeNumberWithCharacterOptimally(array)

