function reverseWord(str){
    if(str.length ===0) return ""

    let arr = str.split(" ")
    let str1 = ""
    let input = arr[0].split("").reverse().join("")
    str1 = str1  + input

    return str1 + " " +reverseWord((arr.slice(1)).join(" "))
}


reverseWord("they are playing a game")