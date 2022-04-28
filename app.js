// npm - global command, come with node
// npm --version | npm -v

// local dependency - use only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName> | redundant with introduction of npx

// package.json - manifest file (stores important info about project/packages)
// npm init -y | creates default file that you can then edit

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
