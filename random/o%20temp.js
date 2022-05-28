function capitalize(arr) {
   let empty = []
      if(arr.length ===0) return empty;
      empty.push(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()))
      arr.splice(0,1)
      return empty.concat(capitalize(arr))
}

console.log(capitalize(['hello', 'world']))
