// curry from ramda works for multiple functions
const { curry } = require('ramda')

// data happens last
const replace = curry((regex, replacement, str) => 
  str.replace(regex, replacement)
)

const replaceVowels = replace(/[AEIOU]/ig, '!')
console.log(replaceVowels('Hey I have words'))

/**
 * another way to curry is to use bind
 */

// exercise code pen https://codepen.io/drboolean/pen/OJJOQMx

