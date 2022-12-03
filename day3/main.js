const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')
let sum = 0

for (const bag of rows) {
  const comp1 = bag.substring(0, bag.length / 2).split('') // Convert to array
  const comp2 = bag.substring(bag.length / 2, bag.length).split('') // convert to array
  
  const commonItem = comp1.filter(item => comp2.includes(item))[0]

  let priority = 0
  if (commonItem === commonItem.toLowerCase()) {
    priority = (commonItem.charCodeAt(0) - 97) % 26 + 1
  } else {
    priority = (commonItem.charCodeAt(0) - 65 + 26) % 52 + 1
  }
  
  sum += priority
}

console.log('Sum of the priorities of the duplicated item =>', sum)
