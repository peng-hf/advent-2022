const fs = require('fs')

const rows = fs.readFileSync('./input-sample.txt', 'utf-8').split('\n')

let head = { x: 0, y: 0 }, rest = [...Array(10)].map(v => ({ x: 0, y: 0 }))
let tailVisited = [] // List of position visited by tail at least once
let headHistory = []

const knotToStr = knot => `${knot.x}-${knot.y}`

function areAdjacent(knot1, knot2) {
  const isPos = (x, y) => knot1.x === x && knot1.y === y
  const { x, y } = knot2
  return isPos(x, y) // overlap
    || isPos(x + 1, y) || isPos(x - 1, y) // row
    || isPos(x, y + 1) || isPos(x, y - 1) // column
    || isPos(x - 1, y + 1) || isPos(x + 1, y + 1) || isPos(x - 1, y - 1) || isPos(x + 1, y - 1) // diagonals
}

function updateRestKnots(prevHead) {
  let cur = prevHead
  rest.forEach(k => {
    if (!areAdjacent(k, cur)) {
      k.x = cur.x
      k.y = cur.y
    }
    cur = k
  })

  const tail = rest[rest.length - 1]
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
      updateRestKnots({ x: head.x, y: head.y - 1 })
      headHistory.push(knotToStr(head))
    }
  } else if (direction === 'D') {
    while (steps-- > 0) {
      head.y--
      updateRestKnots({ x: head.x, y: head.y + 1 })
      headHistory.push(knotToStr(head))
    }
  } else if (direction === 'R') {
    while (steps-- > 0) {
      head.x++
      updateRestKnots({ x: head.x - 1, y: head.y })
      headHistory.push(knotToStr(head))
    }
  } else if (direction === 'L') {
    while (steps-- > 0) {
      head.x--
      updateRestKnots({ x: head.x + 1, y: head.y })
      headHistory.push(knotToStr(head))
    }
  }
}

console.log('Head history', headHistory)
console.log('Tail visited', tailVisited)
console.log('Count positions visited by tail at least once =>', tailVisited.length + 1)