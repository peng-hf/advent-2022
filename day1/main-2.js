const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function getMax(rows, skip = []) {
  let acc = 0, max = 0
  for (const cal of rows) {
    if (cal === '') {
      if (acc > max && !skip.includes(acc)) max = acc
      acc = 0
    }
    else acc += parseInt(cal)
  }
  return max
}

const max1 = getMax(rows, [])
const max2 = getMax(rows, [max1])
const max3 = getMax(rows, [max1, max2])

console.log(max1, max2, max3)

console.log('Top 3 total calories elves => ', max1 + max2 + max3)



