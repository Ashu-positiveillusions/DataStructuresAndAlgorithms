function printNum(){
    // hash map for unique
    // let matrix = []
    for(let i=0; i<5; i++){
        let arr = []
        for(let j=0; j<5; j++){
            let randomNum = Math.floor(Math.random()*100)
            arr.push(randomNum)
        }
        // matrix.push(arr)
        
        console.log(arr.join(" "))
    }
}

printNum()