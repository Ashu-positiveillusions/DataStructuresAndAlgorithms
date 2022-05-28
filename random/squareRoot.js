// function sqrt(number)
// {
//     let error = 0.00001; //define the precision of your result
//     let s = number;

//     while ((s - number / s) > error) //loop until precision satisfied 
//     {
//         s = (s + number / s) / 2;
//     }
//     return s.toFixed(5);
// }

// sqrt(121000000)

function squareRoot (number, left, right){
    let mid = (left + right)/2;
    let mul = mid * mid
    if(mul === number || (+Math.abs(mul-number).toFixed(5)<0.00001)){
        return mid
    }else if(mul > number){
        return squareRoot (number, left, mid)
    }else{
        return squareRoot(number, mid, right)
    }
}

function findSqrt(number){
    let found = false
    let i = 1
    while (found == false){
        if( i*i === number){
            found = true
            console.log(i)
        }else if (i*i > number){
            var res = squareRoot(number, i-1,i)
            found = true
            console.log(+res.toFixed(5))
        }
        i++
    }
}

findSqrt(122)