const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')
const winOppShape = { 'C': 'X', 'A': 'Y', 'B': 'Z' }
const loseOppShape = { 'A': 'Z', 'B': 'X', 'C': 'Y'}
let score = 0, scoreShape = 0, scoreOutcome = 0

for (const round of rows) {
  scoreOutcome = 'XYZ'.indexOf(round[2]) * 3

  if (round[2] === 'Y') { // draw
    scoreShape = 'ABC'.indexOf(round[0]) + 1
  } else if (round[2] === 'Z') { // win
    scoreShape = 'XYZ'.indexOf(winOppShape[round[0]]) + 1
  } else { // lose
    scoreShape = 'XYZ'.indexOf(loseOppShape[round[0]]) + 1
  }
    

  score += scoreShape + scoreOutcome
}

console.log('Total score => ', score)
