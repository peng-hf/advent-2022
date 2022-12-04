const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')
let sum = 0, count = 1

for (let i = 0; i < rows.length; ++i) {
  if (count === 3) {
    count = 1
    const bag1 = rows[i - 2].split('')
    const bag2 = rows[i - 1].split('')
    const bag3 = rows[i].split('')

    const commonItem12 = bag1.filter(item => bag2.includes(item))
    const commonItem123 = commonItem12.find(item => bag3.includes(item))

    let priority = 0
    if (commonItem123 === commonItem123.toLowerCase()) {
      priority = (commonItem123.charCodeAt(0) - 97) % 26 + 1
    } else {
      priority = (commonItem123.charCodeAt(0) - 65 + 26) % 52 + 1
    }
    
    sum += priority
  } else count++
}

console.log('Sum of the priorities of the duplicated item =>', sum)
