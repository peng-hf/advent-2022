const fs = require('fs')

const rows = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function getScenicScore(i, j) {
  const treeSize = rows[i][j]
  let left = 0, right = 0, bottom = 0, top = 0

  let colIdxLeft = j - 1
  while (colIdxLeft >= 0) {
    top++
    if (rows[i][colIdxLeft] >= treeSize) break
    colIdxLeft--
  }

  let colIdxRight = j + 1
  while (colIdxRight < rows[i].length) {
    right++
    if (rows[i][colIdxRight] >= treeSize) break
    colIdxRight++
  }

  let rowIdxTop = i - 1
  while (rowIdxTop >= 0) {
    top++
    if (rows[rowIdxTop][j] >= treeSize) break
    rowIdxTop--
  }

  let rowIdxBottom = i + 1
  while (rowIdxBottom < rows.length) {
    bottom++
    if (rows[rowIdxBottom][j] >= treeSize) break
    rowIdxBottom++
  }
  return left * right * bottom * top
}



let bestScore = 0
let i = 0
while (i < rows.length) {
  j = 0
  while (j < rows[i].length) {
    const score = getScenicScore(i, j)
    if (score > bestScore) {
      bestScore = score
    }
    ++j
  }
  ++i
}

console.log('Best scenic score => ', bestScore)
