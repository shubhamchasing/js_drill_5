const testLimitFunctionCallCount = require("../limitFunctionCallCount");


const add  = (a,b,c) => a + b - c;

const limit = testLimitFunctionCallCount(add,3);

console.log(limit(1,2,3))
console.log(limit(3,4,5))
console.log(limit(4,5,6))


