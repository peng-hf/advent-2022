const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let cycle = 0, X = 1
let cyclesToDetect = [20, 60, 100, 140, 180, 220]
let signalStrenght = 0

function processSignalStrength() {
  if (cyclesToDetect.includes(cycle)) {
    signalStrenght += cycle * X
  }
}

for (const row of rows) {
  const [instruction, value] = row.split(' ')
  if (instruction === 'noop') {
    cycle++
    processSignalStrength()
  } else if (instruction === 'addx') {
    cycle++
    processSignalStrength()

    cycle++
    processSignalStrength()

    X += parseInt(value)
  }
}

console.log('Signal strength =>', signalStrenght)



