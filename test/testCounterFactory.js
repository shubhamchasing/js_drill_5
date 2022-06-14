const counterFactory = require("../counterFactory");

let changes = counterFactory(5)

console.log(changes.increment())
console.log(changes.decrement())
