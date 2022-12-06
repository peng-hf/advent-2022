const fs = require('fs')

const stream = fs.readFileSync('./input.txt', 'utf-8')

function part1() {
  let i = 0, j = 3
  while (j < stream.length) {
    const marker = stream.substring(i, j + 1)
    const set = [...new Set(marker)]

    if (set.length === 4) {
      console.log('Response part 1 => ', j + 1)
      break
    }

    ++i
    ++j
  }
}

function part2() {
  let i = 0, j = 13
  while (j < stream.length) {
    const marker = stream.substring(i, j + 1)
    const set = [...new Set(marker)]

    if (set.length === 14) {
      console.log('Response part 1 => ', j + 1)
      break
    }

    ++i
    ++j
  }
}

part1()
part2()


// console.log(stream)
