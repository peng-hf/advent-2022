const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let stacks = [], parseMove = false, i = 0
while (i < rows.length) {
  let j = 1, k = 0, row = rows[i]

  // Parse stacks
  while (j < row.length && !parseMove) {
    if (/[A-Z]/.test(row[j])) {
      if (!stacks[k]) {
        stacks[k] = []
      }
      stacks[k].unshift(row[j])
    } else if (row[j] === '1') {
      parseMove = true
      i += 2
      row = rows[i]
      break

    }
    j += 4
    ++k
  }

  // Parse move and execute them
  if (parseMove) {
    if (row === '') break
    const rowSplit = row.split(' ')
    let count = parseInt(rowSplit[1])
    const from = parseInt(rowSplit[3])
    const to = parseInt(rowSplit[5])

    while (count > 0) {
      if (stacks[from - 1]) {
        const letter = stacks[from - 1].pop()
        stacks[to - 1].push(letter)
      }
      count--
    }
  }

  ++i
}

const response = stacks.map(s => {
  return s[s.length - 1]
}).join('')

console.log('Response =>', response)



