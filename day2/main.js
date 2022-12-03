const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8')


const defeatShape = { 'X': 'C', 'Y': 'A', 'Z': 'B' }
let score = 0, scoreShape = 0, scoreOutcome = 0
for (const round of data.split('\n')) {
  scoreShape = 'XYZ'.indexOf(round[2]) + 1

  if ('ABC'.indexOf(round[0]) + 1 === scoreShape) scoreOutcome = 3
  else if (defeatShape[round[2]] === round[0]) scoreOutcome = 6
  else scoreOutcome = 0

  score += scoreShape + scoreOutcome
}

console.log('Total score => ', score)
