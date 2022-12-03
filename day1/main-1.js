const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf-8')
let acc = 0, max = 0

for (const cal of data.split('\n')) {
  if (cal === '') {
    if (acc > max) max = acc
    acc = 0
  }
  else acc += parseInt(cal)
}


console.log(`Elf with the most calories => ${max}`)

