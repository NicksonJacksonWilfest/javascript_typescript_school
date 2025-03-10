// Array workout
// let scores = new Array(); //uncommenting this Error: Cannot redeclare block-scoped variable

const scores = [9, 10, 8, 7, 6]
console.log(scores)

const x = scores.indexOf(10)
console.log(x)

scores.pop()
console.log(scores)

scores.push(12)
console.log(scores)

scores.shift()
console.log(scores)

scores.unshift(77)
console.log(scores)

console.log(Array.isArray(scores))