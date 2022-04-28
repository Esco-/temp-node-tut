const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first  = readFileSync(join(__dirname, '../content/first.txt'), 'utf8')
const second = readFileSync(join(__dirname, '../content/second.txt'), 'utf8')

writeFileSync(
  join(__dirname, '../content/result-sync.txt'),
  `Here is the result ${first}, ${second}`,
  { flag: 'a' }
)

console.log(first)
console.log(second)
console.log('done with this task')
console.log('starting the next one')
