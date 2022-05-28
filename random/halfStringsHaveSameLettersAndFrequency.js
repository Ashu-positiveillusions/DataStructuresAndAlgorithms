// 2 half strings have same letters with same frequency

function halfString(s){
    
       let mid = 0
    let s1 = ""
    let s2 = ""
    if(s.length % 2=== 0){
        mid = s.length/2
        s1 = s.slice(0,mid)
        s2 = s.slice(mid, s.length)
    }else{
        mid = (s.length-1)/2
        s1 = s.slice(0,mid)
        s2 = s.slice(mid+1, s.length)
    }
    let map = new Map()
    for(let i=0; i<s1.length; i++){
        if(!map.has(s1[i])) map.set(s1[i], 1)
        else map.set(s1[i], map.get(s1[i])+1)
    }
    for(let i=0; i<s2.length; i++){
        if(map.has(s2[i])) map.set(s2[i], map.get(s2[i])-1)
        else return "No"
    }
    for(let pairs of map){
        if(pairs[1] === 0) map.delete(pairs[0])
    }
    if(map.size === 0) return "Yes"
    else return "No"
}

halfString("abdcabc")