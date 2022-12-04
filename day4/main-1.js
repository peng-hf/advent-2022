const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let res = 0
for (const pair of rows) {
  const assignments = pair.split(',')
  const elf1 = assignments[0].split('-').map(id => parseInt(id)) 
  const elf2 = assignments[1].split('-').map(id => parseInt(id))

  if ((elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) || (elf2[0] >= elf1[0] && elf2[1] <= elf1[1])) {
    res++
  }
}

console.log('Number of pairs with one range fully containing the other =>', res)


// ...4567..  4 - 7
// ....56...  5 - 6
