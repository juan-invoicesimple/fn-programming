// to run tests: npx qunit 03-exercises.js

// Setup
//==============
const _ = require('ramda')

const split = _.curry((delimiter, string) => string.split(delimiter))


// Exercise 1
//==============

/*const words = function(str) {
  return split(' ', str);
}*/

// same as str => split(' ', str); canceling the argument:
const words = split(' ')

QUnit.test("Ex1: split", assert => {
  assert.deepEqual(words("Jingle bells Batman smells"), ['Jingle', 'bells', 'Batman', 'smells'])
})

// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

// const sentences = xs => _.map(words, xs);
// canceling the argument as the 1 exercise:
const sentences = _.map(words);

QUnit.test("Ex1a: map/split", assert => {
  assert.deepEqual(sentences(["Jingle bells Batman smells", "Robin laid an egg"]), [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]);
})

// Exercise 2
//==============

/*const filterQs = function(xs) {
  return _.filter(function(x){ return _.test(/q/ig, x);  }, xs);
}*/

// arrow functions:
// const filterQs = xs => _.filter(x => _.test(/q/ig, x), xs);
// canceling arguments:
const filterQs = _.filter(_.test(/q/ig));

QUnit.test("Ex2: filter", assert => {
  assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
})

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x,y) => x >= y ? x : y // <- leave be

// TODO: rewrite max in its "simplest" form
/*const max = function(xs) {
  return _.reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, 0, xs);
}*/

// arrow functions
// const max = xs => _.reduce((acc, x) => _keepHighest(acc, x), 0, xs);
// canceling arguments
// const max = _.reduce((acc, x) => _keepHighest(acc, x), 0);
// _keepHighest receives the same arguments as reduce, so we can simplify:
const max = _.reduce(_keepHighest, 0);

QUnit.test("Ex3: max", assert => {
  assert.equal(max([323,523,554,123,5234]), 5234);
})

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

// const slice = undefined

// without currying:
// const slice = from => to => xs => xs.slice(from, to)
// curried:
const slice = _.curry((from, to, xs) => xs.slice(from, to))

QUnit.test("Bonus 1", assert => {
  assert.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
})

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
// const take = undefined

const take = slice(0)

QUnit.test("Bonus 2", assert => {
  assert.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
})