// find the largest substring with k distinct characters.

// substring is consecutive characters
// subsequence is combo of non consecutive characters also
// possible solution - brute force
// find all substrings and and check each substring with k character(O(n^2)) // substring find O(n) each substring check time O(n^3)
// character fixed (0-255) // 26 (a-z)

function isCurrentWindowValid(count,k){
    let curr_u_c = 0;
    for(let i=0; i<count.length; i++){
        if(count[i]>0){
            curr_u_c++
        }
    }
    return k >= curr_u_c
}


function findKthLargestSubstring(str, k){
    let u_c_count = 0 //unique character count
    let count = [] // array contains the frequency of the character

    // a-z (26) - indexing of array is 0,1,2

    for(let i=0; i<26; i++){
        count.push(0)
    }

    // count the number of unique characters
    for(let i=0; i<str.length; i++){
        if(count[str[i].charCodeAt(0)-"a".charCodeAt(0)]===0){
            u_c_count++
        }
        count[str[i].charCodeAt(0)-"a".charCodeAt(0)]++
    }

    // if number of unique characters is less than k, then substring not possible
    if(k>u_c_count){
        console.log("substring cannot be formed")
    }

    // reset the count array
    for(let i=0; i<26; i++){
        count[i] = 0
    }

    let start = 0
    let end = 0

    let max_window_size = 1
    let max_window_start = 0
    count[str[0].charCodeAt(0) - "a".charCodeAt(0)]++

    for(let i=1; i<str.length; i++){
        count[str[i].charCodeAt(0) - "a".charCodeAt(0)]++ // tracking the character present inside the window
        end++ //increasing the window size

        while(!isCurrentWindowValid(count, k)){
            count[str[start].charCodeAt(0) - "a".charCodeAt(0)]--
            start++
        }

        if(end-start+1 > max_window_size){
            max_window_size = end-start+1
            max_window_start = start
        }
    }
    console.log(max_window_size, max_window_start)
}

findKthLargestSubstring("aabacbebebe", 3)
