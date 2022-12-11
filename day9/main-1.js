const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

let head = { x: 0, y: 0 }, tail = { x: 0, y: 0 }
let tailVisited = [] // History of position visited by tail at least once

const knotToStr = knot => `${knot.x}-${knot.y}`

function isTailAdjacent() {
  const isPos = (x, y) => tail.x === x && tail.y === y
  const { x, y } = head
  return isPos(x, y) // overlap
    || isPos(x + 1, y) || isPos(x - 1, y) // row
    || isPos(x, y + 1) || isPos(x, y - 1) // column
    || isPos(x - 1, y + 1) || isPos(x + 1, y + 1) || isPos(x - 1, y - 1) || isPos(x + 1, y - 1) // diagonals
}

function updateTail(x, y) {
  tail.x = x
  tail.y = y
  if (!tailVisited.includes(knotToStr(tail))) {
    tailVisited.push(knotToStr(tail))
  }
}

for (const row of rows) {
  let [direction, steps] = row.split(' ')
  steps = parseInt(steps)

  if (direction === 'U') {
    while (steps-- > 0) {
      head.y++
      if (!isTailAdjacent()) updateTail(head.x, head.y - 1)
    }
  } else if (direction === 'D') {
    while (steps-- > 0) {
      head.y--
      if (!isTailAdjacent()) updateTail(head.x, head.y + 1)
    }
  } else if (direction === 'R') {
    while (steps-- > 0) {
      head.x++
      if (!isTailAdjacent()) updateTail(head.x - 1, head.y)
    }
  } else if (direction === 'L') {
    while (steps-- > 0) {
      head.x--
      if (!isTailAdjacent()) updateTail(head.x + 1, head.y)
    }
  }
}

console.log('Tail visited', tailVisited)
console.log('Count positions visited by tail at least once =>', tailVisited.length + 1)