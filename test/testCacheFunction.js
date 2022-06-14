const cacheFunction = require("../cacheFunction");


const cb = (a) =>{
    return a * a 
}

let test = cacheFunction(cb)
console.log(test(2))
console.log(test(2))

