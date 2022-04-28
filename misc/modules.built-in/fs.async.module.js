const { join } = require('path')
const { readFile, writeFile } = require('fs')

const firstPath  = join(__dirname, '../content/first.txt')
const secondPath = join(__dirname, '../content/second.txt')
const resultPath = join(__dirname, '../content/result-async.txt')

console.log('start')

readFile(firstPath, 'utf8', (err, result) => {
  if(err) {
    console.log(err)
    return
  }
  const first = result;
  readFile(secondPath, 'utf8', (err, result) => {
    if(err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      resultPath,
      `Here is the result: ${first + second}`,
      { flag: 'a'},
      (err, result) => {
        if(err) {
          console.log(err)
          return
	}
        console.log('done with this task')
      }
    )
  })
})

console.log('starting next task')
