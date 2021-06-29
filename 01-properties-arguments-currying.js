/**
// associative
add(add(x, y), z) === add(x, add(y, z))

// commutative
add(x, y) === add(y, x)

// identity
add(x, 0) === x

// distributive
add(multiply(x, y), multiply(x, z)) === multiply(x, add(y, z))
 */

const add = (x, y) => x + y

/**
 * Functions should take one input and give you one output
 * we can convert functions like add to take one input
 * and vice versa
 */

const toPair = f => ([x, y]) => f(x, y)
console.log(toPair(add)([1, 2])) // 3

const fromPair = f => (x, y) => f([x, y])
console.log(fromPair(toPair(add))(1, 2)) // 3

const flip = f => (y, x) => f(x, y)
console.log(flip(add)(1,2)) // 3

/**
 * curry: takes a fn and instead of taking one or more arguments
 * we are gonna take one argument at a time
 * 
 * basically it remembers an argument and waits
 * for the next arguments
 */ 

const curry = f => x => y => f(x, y)
const uncurry = f => (x, y) => f(x)(y)

const curriedAdd = curry(add)

const increment = curriedAdd(1)
console.log(increment(3)) // 4
console.log(increment(10)) // 11

const modulo = curry((x, y) => y % x)

const isOdd = modulo(2) // (2, y) => 2 % y
console.log(isOdd(2)) // 0 
console.log(isOdd(3)) // 1

// remember to use the data as the last arguments
const filter = curry((f, xs) => xs.filter(f))

const getOdds = filter(isOdd)
console.log(getOdds([1, 2, 3, 4, 5])) // 1, 3, 5
