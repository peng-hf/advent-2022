const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let cycle = 0, X = 1
let screen = [...Array(6)].map(r => Array(40))


let i = 0, j = 0
function drawPixel() {
  if (j === X - 1 || j === X || j === X + 1) {
    screen[i][j] = '#'
  } else {
    screen[i][j] = '.'
  }
  j++
  if (j === 40) {
    j = 0
    i++
  }
}

for (const row of rows) {
  const [instruction, value] = row.split(' ')
  if (instruction === 'noop') {
    cycle++
    drawPixel()
  } else if (instruction === 'addx') {
    cycle++
    drawPixel()

    cycle++
    drawPixel()

    X += parseInt(value)
  }
}

// Draw screen
screen.forEach(row => {
  console.log(row.join(''))
})




