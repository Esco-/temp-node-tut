// Modules
// CommonJS, every file is a module (by default
// Modules - Encapsulated code (only share the minimum))

const sayHi = require('./utils')
const { john, peter } = require('./names')
const data = require('./generic-data')
require('./mind-grenade')

sayHi('susan')
sayHi(john)
sayHi(peter)
